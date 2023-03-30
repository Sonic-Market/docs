---
id: fees
title: Fees
sidebar_position: 2
---

## Trading Fees

Trading fees are set per market based on the properties of the asset pair being traded.
Most pairs will reward the maker with a negative trading fee paid for by the positive trading fees of the taker.
The maker will be rewarded with the same asset that the taker is receiving.

For example, let's assume an ETH-USDC market with a 0.04% fee for the taker and a -0.02% fee for the maker.
If Alice makes a sell order for 10 ETH at 1000 USDC each, and Bob fills that order,
Bob being the taker pays 10000 USDC to Alice and receives 9.996 ETH after paying a 0.004 ETH fee.
Alice being the maker receives 0.002 ETH as the fee is negative and the remaining 0.002 ETH goes to the protocol.

Negative trading fees are in place to incentive market makers to supply liquidity and facilitate more trades.
