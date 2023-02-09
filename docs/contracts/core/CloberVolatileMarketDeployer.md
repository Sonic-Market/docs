## CloberVolatileMarketDeployer

### deploy

```solidity
function deploy(address orderToken, address quoteToken, address baseToken, bytes32 salt, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 r) external returns (address)
```

Deploy a new volatile market

_Only the market factory can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderToken | address | The NFT address of the order book |
| quoteToken | address | The quote token address |
| baseToken | address | The base token address |
| salt | bytes32 | 32 byte data that used to create the address of the contract |
| quoteUnit | uint96 | The unit amount of the quote token. Raw amounts represent multiples of the quoteUnit. |
| makerFee | int24 | The value of the make fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | Scale factor |
| r | uint128 | Common ratio |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed volatile market |

