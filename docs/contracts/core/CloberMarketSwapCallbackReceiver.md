## CloberMarketSwapCallbackReceiver

### cloberMarketSwapCallback

```solidity
function cloberMarketSwapCallback(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, bytes data) external payable
```

Contracts placing orders on the OrderBook must implement this method.
In this method, the contract has to send the required token, or the transaction will revert.
If there is a claim bounty to be refunded, it will be transferred via msg.value.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inputToken | address | The address of the token the user has to send. |
| outputToken | address | The address of the token the user has received. |
| inputAmount | uint256 | The amount of tokens the user has to send. |
| outputAmount | uint256 | The amount of tokens the user has received. |
| data | bytes | The user's custom callback data. |

