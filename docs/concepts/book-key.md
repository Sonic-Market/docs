---
id: book-key
title: Book Key
sidebar_position: 4
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

## Currency

We use the Currency.sol library introduced in UniswapV4 to easily handle asset balance inquiries and transfers. The Currency library allows us to treat native tokens (e.g., ETH) and ERC20 tokens in the same manner.

## Unit Size

unitSize is a variable that sets the unit amount of trades of each orderbook. Given unitSize, the maximum trade size is capped at (2^64-1) * unitSize. For example, setting the unitSize to 1 for ETH restricts the maximum order size to 18.45 ETH, which is too constraining. This is because ETH is a 18-decimal token, so unitSize of 1 in this case means that the unit amount of trade is 10^(-18) ETH. For this reason, it is usually recommended to set the unitSize higher, like 10^12, for such assets. Likewise, for assets with small decimals like USDC, unitSize of 1 is recommended.

## Fee Policy

There are two attributes in FeePolicy

- `usesQuote`: A boolean type flag indicating whether the quote asset is used for the fee. If true, the quote asset is used; if false, the base asset is used for the fee.
- `rate`: An int24 type representing the fee rate, ranging from -50% to +50% with 1e6 precision (-500000 ~ 500000). A positive value means the user pays a fee, while a negative value functions as a rebate to the user.

Different fee policies can be applied for the maker side and the taker side. Note that though fee rates can be negative, the “net fee” should be zero or positive. For example, if a -1% rate is applied to the maker side, the taker fee rate should be equal to or larger than 1%.

For gas optimization, the `FeePolicy` is not stored as a structure but is encoded as a uint24. Details on this encoding can be found in [FeePolicy.sol](https://github.com/clober-dex/v2-core/blob/master/src/libraries/FeePolicy.sol#L18).

## Hooks

Clober adopts and enhances the concept of “hooks” introduced in UniSwap v4 to further enhance the flexibility of orderbooks. While Uniswap V4 introduced hooks as a means to inject custom logic at various stages of a pool's lifecycle, Clober extends this concept by providing hooks throughout the entire lifecycle of making and taking orders. Specifically, hooks can be executed at any of the following points in the order lifecycle:

- `beforeOpen`
- `afterOpen`
- `beforeMake`
- `afterMake`
- `beforeTake`
- `afterTake`
- `beforeCancel`
- `afterCancel`
- `beforeClaim`
- `afterClaim`

This approach allows Clober V2 to facilitate the development of customized features such as maker whitelisting, oracle integrations, automated proceeds claiming, automated market-making bots, and so on.