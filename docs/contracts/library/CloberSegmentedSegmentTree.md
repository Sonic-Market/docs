## CloberSegmentedSegmentTree

uint64 values are stored here to efficiently query the sum of a given range.
A total of 32768 values can be stored in the segment tree.
A query will require at most 14 storage reads, and an update to the tree will require at most 4 storage writes.
The sum of all nodes should not exceed uint64.

### update

```solidity
function update(uint256 index, uint64 value) external returns (uint64)
```

Updates the value at the specified index in the segment tree.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint256 | The index of the value to update. |
| value | uint64 | The value to update the index with. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The value that was replaced by the update. |

### get

```solidity
function get(uint256 index) external view returns (uint64)
```

Gets the value at the specified index in the segment tree.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint256 | The index of the value to get. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The value at the specified index in the segment tree. |

### total

```solidity
function total() external view returns (uint256)
```

Calculates the sum of all values in the segment tree.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The sum of all values in the segment tree. |

### query

```solidity
function query(uint256 left, uint256 right) external view returns (uint256)
```

Calculates the sum of the values in the segment tree within the specified range.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| left | uint256 | The starting index (inclusive) of the values to sum. |
| right | uint256 | The ending index (exclusive) of the values to sum. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The sum of the values in the segment tree within the specified range. |

