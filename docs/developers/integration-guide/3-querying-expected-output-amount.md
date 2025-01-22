---
id: 3-querying-expected-output-amount
title: 3. Querying Expected Output Amount
sidebar_position: 1
---

# **3. Querying Expected Output Amount**

There is a **view function** that calculates the amountOut you will receive when you input an amountIn into a book. Alternatively, you can refer to our **off-chain TypeScript** implementation available in the SDK for additional guidance.

Below is the interface for getExpectedOutput. If you want to allow **unlimited slippage**, simply set the limitPrice parameter to **0**.

```solidity
/**
 * @notice Struct for the parameters of the take order action
 */
struct TakeOrderParams {
    BookId id;
    uint256 limitPrice;
    uint256 quoteAmount;
    uint256 maxBaseAmount;
    bytes hookData;
}

/**
 * @notice Returns the expected output for a spend order
 * @param params The parameters of the spend order
 * @return takenQuoteAmount The expected taken quote amount
 * @return spentBaseAmount The expected spend base amount
 */
function getExpectedOutput(IController.SpendOrderParams memory params)
    external
    view
    returns (uint256 takenQuoteAmount, uint256 spentBaseAmount);
```

Books are always matched from **higher to lower prices**. This means that, for an **ETH/USDC bid book**, once the price stored in the contract is converted into a human-readable value, the order remains the same. However, for an **ask book**, the order is reversed.

Below is an example TypeScript implementation of getExpectedOutput: [**view.ts#L936**](https://github.com/clober-dex/v2-sdk/blob/main/src/view.ts#L818)