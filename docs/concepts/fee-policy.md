---
id: fee-policy
title: Fee Policy
sidebar_position: 7
---

There are two attributes in FeePolicy

- `usesQuote`: A boolean type flag indicating whether the quote asset is used for the fee. If true, the quote asset is used; if false, the base asset is used for the fee.
- `rate`: An int24 type representing the fee rate, ranging from -50% to +50% with 1e6 precision (-500000 ~ 500000). A positive value means the user pays a fee, while a negative value functions as a rebate to the user.

Different fee policies can be applied for the maker side and the taker side. Note that though fee rates can be negative, the “net fee” should be zero or positive. For example, if a -1% rate is applied to the maker side, the taker fee rate should be equal to or larger than 1%.

For gas optimization, the `FeePolicy` is not stored as a structure but is encoded as a uint24. Details on this encoding can be found in [FeePolicy.sol](https://github.com/clober-dex/v2-core/blob/master/src/libraries/FeePolicy.sol#L18).
