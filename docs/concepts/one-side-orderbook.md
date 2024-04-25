---
id: one-side-orderbook
title: One-sided Orderbook
sidebar_position: 2
---

Unlike traditional CLOBs, where orderbooks contain both bid-side and ask-side, Clober’s orderbooks are one-sided, containing only the bid-side. This design was chosen considering the symmetric nature of orderbooks. This means that if there’s one book for the bid side, another bid-side book with the quote and base reversed can be considered its ask-side book. For example, the bid book for the USDC-ETH pair can be considered an ask-side book for the ETH-USDC market.

One thing to note is that under this design, the bid-side orders and the ask-side orders may overlap, meaning that the highest bid price can be higher than the lowest ask price. Though it might sound “unnatural” at a glance, it actually makes more sense considering the nature of DeFi, where liquidities among various exchanges are easily aggregated, unlike in CEXs.