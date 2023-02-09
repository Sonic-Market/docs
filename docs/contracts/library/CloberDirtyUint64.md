## CloberDirtyUint64

### toDirtyUnsafe

```solidity
function toDirtyUnsafe(uint64 cleanUint) external pure returns (uint64)
```

Converts a clean uint64 value to its dirty representation.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| cleanUint | uint64 | The clean uint64 value to convert. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The dirty representation of the clean uint64 value. |

### toDirty

```solidity
function toDirty(uint64 cleanUint) external pure returns (uint64)
```

Converts a clean uint64 value to its dirty representation.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| cleanUint | uint64 | The clean uint64 value to convert. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The dirty representation of the clean uint64 value. |

### toClean

```solidity
function toClean(uint64 dirtyUint) external pure returns (uint64)
```

Converts a dirty uint64 value to its clean representation.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dirtyUint | uint64 | The dirty uint64 value to convert. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The clean representation of the dirty uint64 value. |

### addClean

```solidity
function addClean(uint64 current, uint64 cleanUint) external pure returns (uint64)
```

Adds a clean uint64 value to a current uint64 value and returns the result.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| current | uint64 | The current uint64 value. |
| cleanUint | uint64 | The clean uint64 value to add. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The result of adding the clean uint64 value to the current uint64 value. |

### addDirty

```solidity
function addDirty(uint64 current, uint64 dirtyUint) external pure returns (uint64)
```

Adds a dirty uint64 value to a current uint64 value and returns the result.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| current | uint64 | The current uint64 value. |
| dirtyUint | uint64 | The dirty uint64 value to add. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The result of adding the dirty uint64 value to the current uint64 value. |

### subClean

```solidity
function subClean(uint64 current, uint64 cleanUint) external pure returns (uint64)
```

Subtracts a clean uint64 value from a current uint64 value and returns the result.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| current | uint64 | The current uint64 value. |
| cleanUint | uint64 | The clean uint64 value to subtract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The result of subtracting the clean uint64 value from the current uint64 value. |

### subDirty

```solidity
function subDirty(uint64 current, uint64 dirtyUint) external pure returns (uint64)
```

Subtracts a dirty uint64 value from a current uint64 value and returns the result.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| current | uint64 | The current uint64 value. |
| dirtyUint | uint64 | The dirty uint64 value to subtract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The result of subtracting the dirty uint64 value from the current uint64 value. |

