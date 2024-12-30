---
id: 1-tracking-the-open-event
title: 1. Tracking the Open Event
sidebar_position: 1
---

# 1. How to Track the Open Event

When a Book is created, an `Open` event is emitted, similar to the `PairCreated` event in the Uniswap V2 factory.

```solidity
/**
 * @notice Event emitted when a new book is opened
 * @param id The book id
 * @param base The base currency
 * @param quote The quote currency
 * @param unitSize The unit size of the book
 * @param makerPolicy The maker fee policy
 * @param takerPolicy The taker fee policy
 * @param hooks The hooks contract
 */
event Open(
    BookId indexed id,
    Currency indexed base,
    Currency indexed quote,
    uint64 unitSize,
    FeePolicy makerPolicy,
    FeePolicy takerPolicy,
    IHooks hooks
);
```

In Sonic Market, the **hook ID** is typically set to a zero byte, meaning **no hooks** are used.

> **Note:** There is no on-chain method to directly retrieve the list of created book IDs. Instead, you can use the Subgraph to query the currently created books and their properties.
>

Below are the Subgraph API endpoint URLs for each chain and an example GraphQL query to retrieve the complete list of book IDs:

```graphql
query {
  books {
    id
    unitSize
    makerPolicy
    takerPolicy
    base {
      id
      name
      symbol
      decimals
    }
    quote {
      id
      name
      symbol
      decimals
    }
  }
}

# Example Response
{
  "id": "1029758694116366057286854058921974392175473815953576661397",
  "unitSize": "1000000000000",
  "makerPolicy": "8888608",
  "takerPolicy": "8888708",
  "base": {
    "id": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": "6"
  },
  "quote": {
    "id": "0xd07379a755a8f11b57610154861d694b2a0f615a",
    "name": "BASE",
    "symbol": "BASE",
    "decimals": "18"
  }
}
```