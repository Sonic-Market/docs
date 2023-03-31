---
id: heap
title: Octopus Heap
sidebar_position: 4
---

Iterating Over Price Points to Fill a Large Market Order

## Mind the Gap!

Lower liquidity in markets can create instances where the two lowest ask price points or the two highest bid price points are not adjacent, creating a gap. 
This gap can become problematic when iterating over price points to handle market orders filled across multiple price points. 
There is no reliable way to know how big these gaps are, and the worst case would merit a scan through the entire list of possible prices.

In the order book below, 10 ETH is sold at 1000 USDC, and 10 ETH is sold at 2000 USDC. 
If Alice were to make a market order of 30000 USDC, iterating over the gap would be extremely expensive gas-wise, with 1000 storage reads being called to check the depth at each price point. 
This transaction would probably not even go through. 
(If Alice were to make an order of 30001 USDC, it would have to iterate to the highest possible price to find that there wasn’t enough liquidity, to begin with.)

<figure style={{textAlign:"center"}}>
    <img src={require("./images/orderbook.png").default} />
</figure>

## Skipping the Gap. Heap Helping Heaps

Instead of iterating through the price points in the gap, the order book uses a heap data structure to keep tabs on all the valid price points, so it can effectively skip the gaps. 
A heap is a tree-based data structure where if it’s a max heap, each node is bigger than or equal to all of its children, and if it’s a min heap, each node is smaller than or equal to all of its children. 
We used a max heap to handle the highest current bid and a min heap to handle the lowest current ask.

By using a highly customized heap, the Octopus Heap, we successfully created a heap that can handle most cases using just one storage read or storage write.

## Octopus Heap

Similar to how the Segmented Segment Tree benefited immensely by packing several nodes into a single slot, we compressed the heap while taking advantage of the fact that non-empty price points tend to be in proximity. Another innovation was born, the Octopus Heap.

## CPI (Compressing the Price to an Index)

For any optimization to occur, we need to minimize the number of bits used to store the price point. We found that the price could be expressed in 16 bits without losing data by using an index instead of storing the actual price. Storing the actual price would be wasting precious bits to support integers that are not viable price points. For example, let’s say that the viable price points are 10010, 10020, 10030, and so on. The bits used to express 10010 in two’s complement can also be used to express 10011, 10012, and 10013, which is unnecessary as those prices are not supported. By saving 10010, 10020, and 10030 as 0, 1, and 2, we can save on wasted space and use fewer bits.

Currently, there are two strategies for mapping prices to an index. These strategies are called price books; we have arithmetic and geometric price books. As the name suggests, the arithmetic price book uses an arithmetic progression, and the geometric price book uses a geometric progression. The initial term and common difference/ratio are set by the market creator.

<figure style={{textAlign:"center"}}>
    <img src={require("./images/pricebook.png").default} />
    <figcaption style={{fontSize:12}}>Screenshot from create your own market page. <a href="https://app.clober.io/form">app.clober.io/form</a></figcaption>
</figure>

## Splitting the Bill (8 bits + 8 bits = 16 bits)

The Octopus Heap consists of a **compressed heap** and a **leaf bitmap,** and instead of storing the whole 16-bit price index on the heap, it stores the first 8 bits on the compressed heap and the remaining 8 bits on the leaf bitmap.

### Compressed Heap

A **compressed heap** is a heap where several nodes are stored on a single storage slot, but unlike the Segmented Segment Tree, we cannot omit any nodes in this process, meaning the parent nodes must be saved as well. By only storing 8-bit values on the heap, 32 nodes can be packed into a single storage slot.

As the first 8 bits of our price index have 256 different values, a heap with nine levels is enough to capture each value. We stored this 9-level high heap by storing the first five levels in a single slot called the head and the remaining in slots called the arms. Every leaf node of the head has two child trees that are three levels high (except for the first leaf node with a child that is four levels high). These 3-level high trees have seven nodes each, so up to 4 of these trees can be stored in a single arm. Since there are 32 smaller trees, we need eight arms to hold them, hence the name Octopus Heap.

The result is a heap that is nine levels high but only requires 2 `sstore`s at most for popping or pushing, which is incredibly gas efficient. Even though operations regarding the heap are very cheap, they will rarely be used and, in most cases, replaced by an even cheaper operation on the leaf bitmap.

### Leaf Bitmap

The **leaf bitmap** stores the entire price index, using the first 8 bits as the key and the last 8 bits as a position on a storage slot using `mapping(uint8 => uint256)`. When saving the last 8 bits of the price index, we fetch the storage slot mapped to the first 8 bits and mark a bit on the 256-bit storage slot to represent that it exists. For example, when saving 0b00000011, we would mark the fourth bit on a `uint256`, as shown below. (Coincidentally, 8 bits have exactly 256 integer values.)

```
8 bit:
00000011 (int value 3)

256-bit storage:
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00000000
00000000 00000000 00000000 00001000
```

Since, in most cases, the price points with open orders will be close to each other, many bits will be marked on the same 256-bit leaf storage slot. This makes finding the next valid price point for most cases possible without using additional `sload`s. This would also make updates to the compressed heap very rare, as only price indices in different groups of 256 need to update the heap. If each price point is a multiple of 1.001  away from the other, the highest price point in a slot would be $1.29(1.001^{256})$ times the lowest price point. So when the market price is 1000, a limit order of 1290, a price 29% higher, can still be stored in the same storage slot, and the heap does not need to be updated.
