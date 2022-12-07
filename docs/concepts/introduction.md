---
id: overview
title: Introduction
sidebar_position: 1
---

## Abstract

Clober presents a new algorithm for order book DEX “**LOBSTER - Limit Order Book with Segment Tree for Efficient oRder-matching**” that enables **on-chain order matching** and settlement on decentralized smart contract platforms. 
With Clober, market participants can place limit and market orders in a fully decentralized, trustless way at a manageable cost.

## DEX 2.0 - On-chain Order Book DEX

### The emergence of AMM and the dawn of DeFi

Exchanging between assets is the most foundational component of financial activities. 
In the early days of Ethereum, there were many projects trying to build decentralized financial applications. 
However, before we had the means to exchange assets effectively in a decentralized way, their adoption was limited since any financial activities accompanying swaps between assets should have relied on centralized infrastructures. 
When Uniswap launched in 2019, it introduced a new way of providing liquidity for swaps between assets efficiently on a low-throughput execution environment and opened up a new era for the blockchain industry called “DeFi.”

AMM enabled us to make a swap between arbitrary sets of assets in a decentralized way - which means that it is non-custodial, trustless, and permissionless.
Leveraging this infrastructure, many protocols such as DeFi protocols or DAOs were able to mint their own governance token and provide liquidity for it - to build community, raise capital, incentivize contributors, etc.
Also, a certain form of AMM specialized for swaps between low-volatility pairs - which is called a “Stable Swap” - was introduced, which significantly contributed to the growth of the decentralized stablecoins by reducing their volatility.

### Limitations of AMM-centric DeFi ecosystem

However, as the DeFi ecosystem grew, the pitfalls of AMMs emerged as well.
The fundamental limitation of AMMs lies in the fact that users cannot place limit orders on them.
This means that market makers have no control over the price range on which to provide liquidity or the margin they take from providing liquidity - i.e., the bid-ask spread.

For example, for high-volatility pairs, the risk of ‘Impermanent Loss’ might exceed the expected revenue from liquidity providing.
Under a traditional order book environment, market makers would have increased the bid-ask spread to offset the volatility risk.
However, it is not possible on AMM protocols. This is why many DeFi protocols provided a massive volume of inflation rewards to the liquidity providers of their governance tokens, which imposed a strong sell pressure on their prices and eventually made them all look like a bunch of decentralized Ponzi schemes.

Stable swaps handle liquidity quite efficiently when all things are good, but when a poorly designed stablecoin starts to depeg it creates severe losses for those who supplied the liquidity.

### The future of DEX beyond AMMs

For more sophisticated DeFi protocols to emerge and expand the territory of the decentralized economy, there must be an on-chain order book infrastructure as their backbone, which enables a generalized form of exchanges between assets with a high degree of freedom.

In the case of Solana, powered by its high throughput, an on-chain order book DEX called “Serum” has already secured its dominant place in the ecosystem, becoming a necessary infrastructure that most of the DeFi protocols integrate with.
Solana’s had-been leading perpetual swap protocol “Mango Market” wouldn’t have had-been so successful had there been no order book infrastructure like Serum.

For another example, the Dydx protocol has become the most successful decentralized perpetual futures platform by leveraging the order book system - although it's off-chain.
Many alternative on-chain perpetual futures protocols utilize AMMs as their exchange infrastructure, but most are far from successful.

It is undeniable that order book DEXs will eventually replace AMMs sooner or later, as smart contract platforms scale and gas costs are reduced. With the emergence of the on-chain order book DEX, a new era of DeFi will open.

### Why on-chain
Off-chain order books require centralized operators to run the matching engine off-chain.
This means that all kinds of typical risks of centralization apply to them. For example, if the operators get sanctioned by a government authority, the platform might not be able to be further maintained, or its users’ assets might get censored.
Also, a malicious operator - or a hacker who compromised the security of the operator - can censor or manipulate users’ trading activities.

In addition, one of the most important merits of DeFi is that it is composable.
Each DeFi protocol can leverage other DeFi protocols as its infrastructure, which creates a strong network effect between protocols.
For example, one may combine a lending protocol and a DEX protocol to create a margin trading platform.
A DEX aggregator can aggregate multiple on-chain DEX protocols to provide large liquidity with no liquidity of its own. An open maker order on an on-chain order book itself can be considered as a stand-alone asset that can be utilized in other protocols - e.g., borrowing USDC against a sell order on the order book.
Conversely, off-chain or app-chain-based DEX protocols cannot provide such properties.
Smart contracts cannot call off-chain functions.
Positions on off-chain DEX protocols cannot be utilized in on-chain protocols.

In short, off-chain order books are inferior in terms of trustlessness, censorship resistance, and interoperability, therefore cannot replace AMM DEXs.

### Why it is difficult to build an on-chain order book
Under the typical implementation of order books, each taker order transaction should process the settlement of an arbitrary number of counterparty orders that are matched with itself.
This means that the computation cost of a taker order increases proportionately to the number of maker orders it is matched with.
Because there’s no limit on this number, the gas cost of a taker order can grow very high - can even exceed the block gas limit, in which case the transaction will fail.
For example, let’s say there are 100,000 sell orders of size 1 ETH at a price of 1,500 USDC.
If someone tries to buy 50,000 ETH with 75,000,000 USDC, the transaction is likely to be rejected because of its high gas cost, even though there are enough counterparty orders to be matched with it.
This is why Serum, a leading order book DEX protocol on Solana, has a parameter to limit the number of matching orders in its taker order interface.

### Clober’s solution
We want to reduce the linear overhead of taker orders.
To do so, we make taker orders only keep track of the “Total Claimable Amount,” which is the sum of taken orders at each price point, instead of processing all the matching orders.
We then let market makers claim the proceed of their filled orders themselves by simply comparing the “Claim Range” of their order and the “Total Claimable Amount”.
“Claim Range” is an interval representing the position of a maker order in the order queue at its price point.
If the “Total Claimable Amount” is bigger or in between an order’s “Claim Range”, the order is fully or partially claimable.

The non-trivial part of this implementation is keeping all of the Claim Ranges up to date.
For example, if my Claim Range is $[10, 13]$ and an order with Claim Range $[8, 10]$ is canceled, my order would need to be updated to $[8, 11]$ and all orders behind mine would also need to be updated.
If a canceling transaction had to process all the range updates, it would be too expensive and possible to fail.
We can overcome this by adopting a data structure called “Segment Tree.”

A segment tree is a data structure that stores a list of numeric values, which enables efficient “range queries” - calculations on the partial sum of its subarrays.
The complexities of insertion, deletion, and range query of the Segment Tree are all logarithmic.
Leveraging the Segment Tree, we can keep track of the Claim Ranges of maker orders at each price point with low gas costs.

Based on this architecture, along with some additional optimizations, we were able to reduce the gas cost of both maker and taker orders, similar to that of a transaction on Uniswap.