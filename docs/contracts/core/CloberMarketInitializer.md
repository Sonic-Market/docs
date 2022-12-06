# CloberMarketInitializer

## CloberMarketInitializer

### Market__initialize

```solidity
function Market__initialize(int24 makeFee, int24 takeFee) external
```

Initialize the market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| makeFee | int24 | The initial value for the make fee.        Paid to the maker when negative, paid by the maker when positive.        Every 10000 represents a 1% fee on trade volume. |
| takeFee | int24 | The initial value for the take fee.        Paid by the taker. Every 10000 represents a 1% fee on trade volume. |

