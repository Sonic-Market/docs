# CloberMarketCallbackReceiver

## CloberMarketCallbackReceiver

### callback

```solidity
function callback(address tokenIn, address tokenOut, uint256 amountIn, uint256 amountOut, bytes data) external payable
```

The user of OrderBook should implement this method.
       In this method, the user has to send required token, or the transaction will revert.
       If there is an claim bounty amount to be refunded, it will transfer via msg.value.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenIn | address | The address of the token user has to send |
| tokenOut | address | The address of the token user receives |
| amountIn | uint256 | The amount of the token user has to send |
| amountOut | uint256 | The amount of the token user receives |
| data | bytes | The user's custom callback data |

