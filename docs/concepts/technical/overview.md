---
id: overview
title: Overview
sidebar_position: 1
---

Implementing an order book on the Ethereum Virtual Machine (EVM) is a non-trivial task. 
Unlike centralized exchanges (CEX) that can iterate over orders to settle trades or several price points to handle large market orders, on EVM, such operations can reach the network's gas or time limitations and fail to go through. 
Any operations that iterate an arbitrary number of times must be constrained and optimized to save the user from excessive gas fees and allow orders to be made reliably.

When implementing Clober, we had to solve two significant challenges regarding arbitrary iteration.
1. Iterating over orders to settle.
2. Iterating over price points to fill a large market order.

Through the thoughtful use of traditional data structures that we modified and rewrote from scratch to optimize gas fees, we overcame these two bottlenecks and successfully implemented a gas-feasible order book.
Our rigorous optimizations, for the first time, allow an EVM order book with gas fees on par with what the state-of-the-art AMMs have to offer.
