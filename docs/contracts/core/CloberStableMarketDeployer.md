## CloberStableMarketDeployer

### deploy

```solidity
function deploy(address orderToken, address quoteToken, address baseToken, bytes32 salt, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 d) external returns (address)
```

Deploys a new stable market.

_Only the market factory can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderToken | address | The address of the new market's order token. |
| quoteToken | address | The quote token address. |
| baseToken | address | The base token address. |
| salt | bytes32 | The salt used to compute the address of the contract. |
| quoteUnit | uint96 | The amount that one raw amount represents in quote tokens. |
| makerFee | int24 | The maker fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The taker fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | The starting price point. |
| d | uint128 | The common difference between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed stable market. |

