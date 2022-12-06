# CloberMarketDeployer

## CloberMarketDeployer

### Deploy

```solidity
event Deploy(address market)
```

Emitted by the market deployer when a new market has been created

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the generated market |

### deploy

```solidity
function deploy(address quoteToken, address baseToken, uint256 quoteTokenMul, uint256 baseTokenMul, uint256 quoteUnit, address registry) external returns (address)
```

Deploy a new market

_Only the market factory can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The quote token address |
| baseToken | address | The base token address |
| quoteTokenMul | uint256 | The quote token's 10**(18 - decimals) value |
| baseTokenMul | uint256 | The base token's 10**(18 - decimals) value |
| quoteUnit | uint256 | The unit amount of the quote token. Raw amounts represent multiples of the quoteUnit. |
| registry | address | The address of the MarketRegistry |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed market |

