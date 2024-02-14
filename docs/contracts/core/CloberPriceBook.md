## CloberPriceBook

### maxPriceIndex

```solidity
function maxPriceIndex() external view returns (uint16)
```

Returns the biggest price book index supported.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | The biggest price book index supported. |

### priceUpperBound

```solidity
function priceUpperBound() external view returns (uint256)
```

Returns the upper bound of prices supported.

_The price upper bound can be greater than `indexToPrice(maxPriceIndex())`._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The the upper bound of prices supported. |

### indexToPrice

```solidity
function indexToPrice(uint16 priceIndex) external view returns (uint256)
```

Converts the price index into the actual price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| priceIndex | uint16 | The price book index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | price The actual price. |

### priceToIndex

```solidity
function priceToIndex(uint256 price, bool roundingUp) external view returns (uint16 index, uint256 correctedPrice)
```

Returns the price book index closest to the provided price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| price | uint256 | Provided price. |
| roundingUp | bool | Determines whether to round up or down. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint16 | The price book index. |
| correctedPrice | uint256 | The actual price for the price book index. |

