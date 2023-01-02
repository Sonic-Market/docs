## CloberMarketSwapCallbackReceiver

### cloberMarketSwapCallback

```solidity
function cloberMarketSwapCallback(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, bytes data) external payable
```

The user of OrderBook should implement this method.
       In this method, the user has to send required token, or the transaction will revert.
       If there is an claim bounty amount to be refunded, it will transfer via msg.value.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inputToken | address | The address of the token user has to send |
| outputToken | address | The address of the token user receives |
| inputAmount | uint256 | The amount of the token user has to send |
| outputAmount | uint256 | The amount of the token user receives |
| data | bytes | The user's custom callback data |

