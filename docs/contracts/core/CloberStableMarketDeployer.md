## CloberStableMarketDeployer

### deploy

```solidity
function deploy(address orderToken, address quoteToken, address baseToken, int96 marketId, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 d) external returns (address)
```

Deploy a new stable market

_Only the market factory can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderToken | address | The NFT address of the order book |
| quoteToken | address | The quote token address |
| baseToken | address | The base token address |
| marketId | int96 | The seed number to generate market address |
| quoteUnit | uint96 | The unit amount of the quote token. Raw amounts represent multiples of the quoteUnit. |
| makerFee | int24 | The value of the make fee.        Paid to the maker when negative, paid by the maker when positive.        Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee.        Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | Initial term of the arithmetic progression |
| d | uint128 | The common difference of successive members |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed stable market |

