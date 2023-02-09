## CloberMarketFlashCallbackReceiver

### cloberMarketFlashCallback

```solidity
function cloberMarketFlashCallback(address quoteToken, address baseToken, uint256 quoteAmount, uint256 baseAmount, uint256 quoteFeeAmount, uint256 baseFeeAmount, bytes data) external
```

To use flash() from the Clober Market, the user should implement this method.
The user will be received the requested tokens at OrderBook.flash() function before this method.
In this method, the user has to repay the loaned tokens with fees, or the transaction will revert.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The quote token address |
| baseToken | address | The base token address |
| quoteAmount | uint256 | The amount of the quote token user has borrowed |
| baseAmount | uint256 | The amount of the base token user has borrowed |
| quoteFeeAmount | uint256 | The fee amount of the quote token user has to pay |
| baseFeeAmount | uint256 | The fee amount of the base token user has to pay |
| data | bytes | The user's custom callback data |

