---
id: book-viewer
title: Book Viewer
sidebar_position: 2
---

The BookViewer contract serves as a supplementary tool for the Controller, allowing users to estimate potential outcomes before actually executing orders. By simulating expected inputs and outputs in advance, users can determine the amount of quote or base tokens needed and assess potential results prior to placing a real trade.

**Liquidity Overview (getLiquidity)**

When provided with a specific Book ID, a starting tick (From), and a number of ticks (N), the function returns an array of liquidity data (including Tick and Depth). This allows users to visualize how much liquidity is available at each tick segment along the price curve of a given Book.

```solidity
struct Liquidity {
    Tick tick;
    uint64 depth;
}

function getLiquidity(BookId id, Tick tick, uint256 n) external view returns (Liquidity[] memory liquidity)
```

**getExpectedInput (Based on TakeOrderParams)**

Before executing a market order (Take), this function estimates how much base token will be consumed.

```solidity
/**
 * @notice Returns the expected input for a take order
 * @param params The parameters of the take order
 * @return takenQuoteAmount The expected taken quote amount
 * @return spentBaseAmount The expected spend base amount
 */
function getExpectedInput(IController.TakeOrderParams memory params)
    external
    view
    returns (uint256 takenQuoteAmount, uint256 spentBaseAmount)
```

**getExpectedOutput (Based on SpendOrderParams)**

Before executing a market order (Spend) using a certain amount of base tokens, this function predicts how many quote tokens will be obtained.

```solidity
/**
 * @notice Returns the expected output for a spend order
 * @param params The parameters of the spend order
 * @return takenQuoteAmount The expected taken quote amount
 * @return spentBaseAmount The expected spend base amount
 */
function getExpectedOutput(IController.SpendOrderParams memory params)
    external
    view
    returns (uint256 takenQuoteAmount, uint256 spentBaseAmount)
```

These pre-calculation features help users avoid unnecessary price impact and unexpected results. By allowing for thorough strategy planning and risk management, BookViewer enables more informed decision-making before making calls to the Controller.