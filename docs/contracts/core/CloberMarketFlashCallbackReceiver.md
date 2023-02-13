## CloberMarketFlashCallbackReceiver

### cloberMarketFlashCallback

```solidity
function cloberMarketFlashCallback(address quoteToken, address baseToken, uint256 quoteAmount, uint256 baseAmount, uint256 quoteFeeAmount, uint256 baseFeeAmount, bytes data) external
```

To use `flash()`, the user must implement this method.
The user will receive the requested tokens via the `OrderBook.flash()` function before this method.
In this method, the user must repay the loaned tokens plus fees, or the transaction will revert.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The quote token address. |
| baseToken | address | The base token address. |
| quoteAmount | uint256 | The amount of quote tokens the user has borrowed. |
| baseAmount | uint256 | The amount of base tokens the user has borrowed. |
| quoteFeeAmount | uint256 | The fee amount in quote tokens for borrowing quote tokens. |
| baseFeeAmount | uint256 | The fee amount in base tokens for borrowing base tokens. |
| data | bytes | The user's custom callback data. |

