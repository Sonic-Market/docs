---
id: 4-building-a-transaction-for-a-market-order
title: 4. Building a Transaction for a Market Order
sidebar_position: 1
---

# **4. Building a Transaction for a Market Order**

Below are the contract function and the corresponding TypeScript method in our SDK for placing a **market order**:

Here is the interface related to the [`Controller`](https://github.com/clober-dex/v2-sdk/blob/main/src/constants/addresses.ts#L7) ’s spend function.

> **Note:** The `tokensToSettle` parameter should include a list of addresses for both the input and output currencies, excluding the zero address.
>

```solidity
/**
 * @notice Struct for the parameters of the spend order action
 */
struct SpendOrderParams {
    BookId id;
    uint256 limitPrice;
    uint256 baseAmount;
    uint256 minQuoteAmount;
    bytes hookData;
}

/**
 * @notice Spends to take a list of orders
 * @dev IMPORTANT: The caller must provide `tokensToSettle` to receive appropriate tokens after execution.
 * @param orderParamsList The list of actions to spend
 * @param tokensToSettle The tokens to settle
 * @param permitParamsList The parameters of the permits
 * @param deadline The deadline for the actions
 */
function spend(
    SpendOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC20PermitParams[] calldata permitParamsList,
    uint64 deadline
) external payable;
```

Similar to getExpectedInput, if you want to set **unlimited slippage**, simply set the limitPrice parameter to **0**.

Below is an example SDK function that wraps a market order using TypeScript. For more details, refer to the following file in our repository:

- Market order: https://github.com/clober-dex/v2-sdk/blob/main/src/call.ts#L459
- Example: [**market-order.ts**](https://github.com/clober-dex/v2-sdk/blob/main/examples/market-order.ts)