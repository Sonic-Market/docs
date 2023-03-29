---
id: tree
title: Segmented Segment Tree
sidebar_position: 3
---

Iterating Over Orders to Settle


## Segmented Segment Tree

With a naive implementation of a segment tree, to support the 32768 orders per queue currently supported, 16 storage updates must be made to create or update an order. This was not acceptable for our team, and we went back to the drawing board to lower the number of `sstore`s from 16 to just 4. The Segmented Segment Tree was born.

### There’s Always Room for More

The first step to making the Segmented Segment Tree was to fit the maximum number of nodes in a single storage slot. By placing the following constraints on the way orders were stored, we could fit the order size in 64 bits, and since each storage slot is 256 bits long, four nodes fit per slot.

1. Have a unit amount for the order size (the quote unit).
2. Save the order size using the quote unit for both bids and asks.

When 0.000001 USDC is used as the quote unit, since the biggest number `uint64` can hold is 18,446,744,073,709,551,615, as long as the depth of every price point is less than $18,446,744,073,709.55, there will be no overflow. Over half of the M2 money supply would have to be placed on a single price point for an overflow to happen.

### Segmentation

The Segmented Segment Tree's core concept comes from splitting the segment tree into multiple segments, which are then captured and stored in storage slots. What makes the Segmented Segment Tree so remarkable is that not only can four nodes fit into one storage slot, but eight nodes stored in two storage slots can generate seven parent nodes, eliminating the need to store those seven in storage altogether! As a result, every two storage slots represent 15 nodes, with eight leaf nodes stored and seven parent nodes generated in memory when needed.

Below is a diagram of how a segment tree looks before and after segmentation.
<figure style={{textAlign:"center"}}>
    <img src={require("./images/tree.png").default} />
    <figcaption style={{fontSize:12}}>15 storage slots worth of data now fits in just 2.</figcaption>
</figure>

Every tree level needs to be updated when updating a segment tree. By segmenting the segment tree, we cut down the number of levels so that a tree with 32768 leaves would have 4 levels instead of 16. This translates to needing 4 `sstore`s rather than 16, a significant improvement. Also, the updates would write on the same memory slots more often, which means even lower gas fees on average. For example, the first four leaves will write to the same four storage slots on updates. This aspect of the Segmented Segment Tree lowers the average gas fees by a substantial amount making the performance of this tree even more impressive.

| # of Segmented Segment Tree Levels | # of Segment Tree Levels | # of Leaf Nodes |
| --- | --- | --- |
| 1 | 4 | 8 |
| 2 | 8 | 128 |
| 3 | 12 | 2048 |
| 4 | 16 | 32768 |
| 5 | 20 | 524288 |

### Order Index
Whenever an order is placed, the order index is incremented to track how the order claim ranges should be queried and where to place following orders. The modulus of the order index is used, cycling through the order queue. If the leaf node that the new order is trying to utilize is not empty, the order books checks if the order placed 32768 orders ago is claimable or claimed. If it is, the new order happily replaces the value with its own. If not, the order will revert as the tree is filled. In other words, the 32768 order limit is on the number of open orders, not the number of orders accumulated.
