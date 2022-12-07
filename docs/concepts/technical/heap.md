---
id: heap
title: Octopus Heap
sidebar_position: 3
---

Iterating Over Price Points to Fill a Large Market Order

## Mind the Gap!

Lower liquidity in markets can create instances where the two lowest ask price points or the two highest bid price points are not adjacent, creating a gap.
This gap can become problematic when iterating over the price points to handle market orders that are filled across multiple price points.
There is no reliable way to know how big these gaps are and the worst case would merit a scan through the entire list of possible prices.

In the example below, 10 ETH is being sold at 1000 USDC, and 10 ETH is being sold at 2000 USDC.
If Alice were to make a market order of 30000 USDC, buying the whole stock, and iterating over the gap would be extremely expensive gas-wise with 1000 storage reads being called to check the amount of ETH at each price point.
This transaction would probably not even go through.
(If Alice were to make an order of 30001 USDC, it would iterate to the highest possible price finding that there wasn’t enough liquidity, to begin with.)

<figure style={{textAlign:"center"}}>
    <img src={require("./images/orderbook.png").default} />
</figure>

## Skipping the Gap. Heap Helping Heaps

Instead of iterating through the price points in the gap, we used a heap data structure to keep tabs on all the valid price points, so we can effectively skip the gaps.
A heap is a tree-based data structure where if it’s a max heap each node is bigger than or equal to all of its children and if it’s a min heap each node is smaller than or equal to all of its children.
We used a max heap to handle the highest current bid and a min heap to handle the lowest current ask.

By using a highly customized heap, the Octopus Heap, we successfully created a heap that can handle most cases using just one storage read or storage write.
A detailed look into how the Octopus Heap works will be shared in the future.