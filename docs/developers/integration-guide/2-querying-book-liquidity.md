---
id: 2-querying-book-liquidity
title: 2. Querying Book Liquidity
sidebar_position: 1
---

# 2. **Querying Book Liquidity**

There are two methods to query the liquidity of a book.

### **2.1 On-Chain Query**

If you have the **book ID** from step 1, you can query the book’s liquidity using the `getLiquidity` function from the [**`BookViewer`**](https://github.com/clober-dex/v2-sdk/blob/main/src/constants/addresses.ts#L9) contract.

- Pass the maximum value of `2^19 - 1` for the tick parameter to retrieve the liquidity. (minimum value is `-(2^19 - 1)`)
- The type `Tick` is `int24`.

```solidity
struct Liquidity {
  Tick tick;
  uint64 depth;
}

/**
 * @notice Returns the liquidity for a specific book
 * @param id The id of the book
 * @param from The starting tick
 * @param n The number of ticks to return
 * @return liquidity An array of liquidity data
 */
function getLiquidity(BookId id, Tick from, uint256 n) external view returns (Liquidity[] memory liquidity);
```

### **2.2 Query via Subgraph**

Alternatively, you can use the Subgraph to fetch the liquidity and properties of the book.

```graphql
query {
  books {
    id
    unitSize
    depths {
      id
      unitAmount
    }
  }
}

# Example Response
{
  "books": [
    {
      "id": "1029758694116366057286854058921974392175473815953576661397",
      "unitSize": "1000000000000",
      "depths": [
        {
          "id": "1029758694116366057286854058921974392175473815953576661397-388836",
          "unitAmount": "17692139"
        },
        {
          "id": "1029758694116366057286854058921974392175473815953576661397-390453",
          "unitAmount": "1000"
        }
      ]
    }
  ]
}
```

### **2.3 Converting Tick and Unit Amounts**

Once you have obtained the tick and unitAmount (or depth) list through method **2.1** or **2.2**, you can convert them into human-readable values as follows:

- **Amount (in wei):** `unitAmount` * `unitSize`
- **Human-readable price:**

  $$

  \text{price} = \frac{\text{toPrice}( \text{tick} ) \times 10^{\text{baseDecimals}}}{2^{96} \times 10^{\text{quoteDecimals}}}
  $$

    - [`toPrice`](https://github.com/clober-dex/v2-sdk/blob/main/src/utils/tick.ts#L45): A function that converts a tick into a price.
    - [`formatPrice`](https://github.com/clober-dex/v2-sdk/blob/main/src/utils/prices.ts#L14): A function that converts a price into a human-readable value.

> **Note:** Price has three layers: **tick**, **price used in the contract** (base 2⁹⁶), and **human-readable price**.
>

**Example 1**

In the case of the **ETH/USDC bid book**, when the tick value is `-193379`, the toPrice function calculates a price of `316924790063341364079`. Using the above formula, the actual human-readable price becomes `4000.1532`. (`baseDecimals` / `quoteDecimals` → 18 / 6)

**Example 2**

In the case of the **USDC/ETH ask book**, when the tick value is `193379`, the toPrice function calculates a price of `19806281907237751425182398969079973056`. Using the above formula, the actual human-readable price becomes `0.0002499904235904979`. (`baseDecimals` / `quoteDecimals` → 6 / 18) It means ETH is **asked** at around 4000 ( = 1 / 0.0002499904235904979 ).

> **Note:** Flipping the sign of the tick essentially produces the reciprocal of the human-readable price.
>