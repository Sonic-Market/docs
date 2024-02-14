## CloberPriceBookDeployer

### deployArithmeticPriceBook

```solidity
function deployArithmeticPriceBook(uint128 a, uint128 d) external returns (address)
```

Deploys an arithmetic price book.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| a | uint128 | The starting price point. |
| d | uint128 | The common difference between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed arithmetic price book. |

### deployGeometricPriceBook

```solidity
function deployGeometricPriceBook(uint128 a, uint128 r) external returns (address)
```

Deploys a geometric price book.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| a | uint128 | The scale factor of the price points. |
| r | uint128 | The common ratio between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the deployed geometric price book. |

### computeArithmeticPriceBookAddress

```solidity
function computeArithmeticPriceBookAddress(uint128 a, uint128 d) external view returns (address)
```

Computes the address of an arithmetic price book.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| a | uint128 | The starting price point. |
| d | uint128 | The common difference between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of where the arithmetic price book is or would be deployed. |

### computeGeometricPriceBookAddress

```solidity
function computeGeometricPriceBookAddress(uint128 a, uint128 r) external view returns (address)
```

Computes the address of a geometric price book.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| a | uint128 | The scale factor of the price points. |
| r | uint128 | The common ratio between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of where the geometric price book is or would be deployed. |

