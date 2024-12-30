---
id: overview
title: Overview
sidebar_position: 0
---

# Integration Guide

This section outlines the steps required to integrate Sonic Market into your aggregator:
1. [Tracking the Open Event](./1-tracking-the-open-event)
2. [Querying Book Liquidity](./2-querying-book-liquidity)
3. [Querying Expected Output Amount](./3-querying-expected-output-amount)
4. [Building a Transaction for a Market Order](./4-building-a-transaction-for-a-market-order)

### **Market Structure**

A **market** in Sonic Market is composed of two Book structs: the **ask book** and the **bid book**. Each Book is distinguished by a primary key called the `BookKey`, which is explained in detail on [this page](https://docs.sonic.market/concepts/technology/book-key). Note that the term **market** here refers to an abstract concept, not an actual contract.

For example, in an **ETH/USDC** market:

- The asset in the **bid book** is **USDC**.
- The asset in the **ask book** is **ETH**.

### **Subgraph Endpoint**

- **Sonic Mainnet**: https://subgraph.satsuma-prod.com/f6a8c4889b7b/clober/v2-core-subgraph-sonic-mainnet/api