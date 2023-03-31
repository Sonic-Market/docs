---
id: claim
title: Order Claim Range
sidebar_position: 2
---

Iterating Over Orders to Settle

## Manual Claiming

Settling an order consists of giving both the taker and the maker their proceeds from the trade. 
While there is only one taker in any trade, there is no limit to the number of makers that need to be paid. 
Iterating over a list of makers would be problematic on the EVM as it may even cause the transaction to time out and fail if the list is long enough. 
The only workaround to this problem is to handle the maker’s portion of the settlement in a separate transaction that the maker would call themselves.

## Knowing When to Claim via Claim Range

Without the takers bothering to alert the makers that their orders are claimable, the task of checking is left to the makers themselves. This can be done by comparing the accumulative sum taken from an order queue with the “claim range” of an order, a value derived by adding the order sizes in an order queue. The key takeaway is that with the introduction of manual claiming, the burden of iterating over orders is simplified to a problem of finding the sum or partial sum of a constantly updating queue of orders.

(Finding the sum of an array or subarray of orders might seem like a problem that involves iteration. However, as we will later discuss, it can also be solved quite elegantly by using a segment tree.)

### Order Claim Range

The order **claim range** is derived from the following equation.

$$
Claim \ Range: [\alpha_n, \beta_n]
$$

- $f(n)$ = order size for $n$th order
- $\alpha_0 = 0$
- $\alpha_{n>1} = \sum_{x=0}^{n-1} \ f(x)$
- $\beta_n = \alpha_n + f(n) = \sum_{x=0}^{n} \ f(x)$

### Total Claimable Amount

We will call the "accumulative sum that has been taken" mentioned earlier the total claimable amount. When someone takes an order from an order queue, the total claimable amount is increased by that amount.

### Comparing Order Claim Range with Total Claimable Amount

Now Let's put these values to use. The following equations indicate whether an order can be claimed and, if so, by how much.

Let $T$ = total claimable amount

There are three different states an order claim interval $[a, b]$ can be concerning $T$.

1. $b < T$, the order is completely claimable.
2. $a < T < b$, the order is partially claimable and the claimable amount is $T - a$.
3. $T < a$, the order is not claimable at all.

In other words, the claimable amount $c(T, [a, b]) = min(max(0, T - a), b - a)$.

### Example

For example, let’s assume that Alice, Bob, and Carol each bid for 10 ETH in sequence at a certain price point. If Dave comes in to sell 15 ETH at that price point, Alice can claim all 10 ETH, Bob can claim 5 ETH, and Carol none at all. While this is quite intuitively true, it can get confusing when claims, partial claims, and cancels start entering the picture. By comparing the order claim range of each user with the total claimable amount, it becomes easier to track.

<figure style={{textAlign:"center"}}>
    <img src={require("./images/example1.png").default} />
    <figcaption style={{fontSize:12}}>Alice, Bob, and Carol make a bid for 10 ETH each. Dave takes 15 ETH at that price.</figcaption>
</figure>

If Bob were to cancel his order (which would automatically claim the 5 ETH currently available to claim), Bob’s order size and Carol’s claim range would have to reflect this.

<figure style={{textAlign:"center"}}>
    <img src={require("./images/example2.png").default} />
    <figcaption style={{fontSize:12}}>Bob claims 5 ETH and cancels the rest. Carol’s claim range is updated and is next in line.</figcaption>
</figure>

As Bob’s order size decreases, Carol’s order claim range updates to keep things consistent. This is good news for Carol as she does not have to wait for Bob’s order to be filled anymore for her turn to come. From this, we can understand that a solution that holds the order claim range in memory would not be sufficient, as canceling an order would cause the code to iterate over every subsequent order to update each claim range. There needs to be a better way of getting the sum of order sizes in a given range.

## Sum of Given Range

Let’s look into three different ways of getting the sum of a range and compare their pros and cons to select the best solution.

### Brute Force

Simply iterating over the queue to query the sum every time can be made possible, but it would require a very hard limit on the maximum number of orders allowed on the queue.
[There are some implementations of EVM order books that only allow 32 orders per queue that we believe use this method.](https://docs.zk.link/docs/Product/orderbook/)
This implementation has a strong advantage over other methods in that updating an order size only requires one storage slot to be updated.
However, we considered the 32 orders per queue limit too strong of a constraint to function as a fully-fledged order book.

### Prefix Sum (Lookup Array)

A slightly more sophisticated approach (algorithm-wise) uses a lookup array with the sum of all the orders up to the $n$th order as the $n$th element of the array. This can make querying the sum a matter of $O(1)$, but show horrible performance when an order is claimed or canceled since when an unclaimed order size is updated, it will require an iteration updating the lookup array. Considering how common canceling and claiming are, and how `sstore` can be ten times more expensive than a `sload`, this version has the worst overall performance.

### Segment Tree

With a segment tree, querying the sum and updating an element both take $O(log(n))$ and the height of the tree is the biggest factor in how expensive a query and update will be. An update must be made at every level of the tree to update an element. Therefore with this method, we need to constrain the tree's height to ensure the fees don’t get out of hand.
