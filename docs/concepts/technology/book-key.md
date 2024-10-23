---
id: book-key
title: Book Key
sidebar_position: 3
---

## Understanding the `BookKey`

Clober V2 offers an efficient order book system for complex digital assets exchanges. At the heart of this system is the `BookManager` contract, which plays a crucial role in identifying and managing each orderbook.

`BookKey` serves as a unique identifier for orderbooks within the BookManager. This structure comprises of the base currency, quote currency, unit, fee policies for the maker and taker, and hooks. Let's dive deeper into each element.

### `BookKey` Structure

```solidity
/**
     * @notice This structure represents a unique identifier for a book in the BookManager.
     * @param base The base currency of the book
     * @param unit The unit of the book
     * @param quote The quote currency of the book
     * @param makerPolicy The maker fee policy of the book
     * @param hooks The hooks contract of the book
     * @param takerPolicy The taker fee policy of the book
     */
    struct BookKey {
        Currency base;         // Base currency
        uint64 unit;           // Unit of the order book
        Currency quote;        // Quote currency
        FeePolicy makerPolicy; // Maker fee policy
        IHooks hooks;          // Hooks contract
        FeePolicy takerPolicy; // Taker fee policy
    }
```

### Attributes of BookKey

- **Base:** Token address of the base asset. For example, ETH is the base asset of the ETH-USDC market.
- **Unit:** The minimum trading unit in the order book, affecting trade precision and the min/max tradeable quantity.
- **Quote:** Token address of the quote asset. For example, USDC is the quote asset of the ETH-USDC market.
- **MakerPolicy:** Fee policy for the maker orders.
- **Hooks:** A contract enabling custom logic execution at various trading stages, facilitating the expansion of order book functionalities.
- **TakerPolicy:** Fee policy for the taker orders.
