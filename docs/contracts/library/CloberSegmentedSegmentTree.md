## CloberSegmentedSegmentTree

uint32 values are stored here to efficiently query the sum of a given range.
A total of 2048 values can be stored in the segment tree.
A query will require at most 5 storage loads, and an update to the tree will require at most 3 storage writes.
The some of all nodes should not exceed uint32.

### update

```solidity
function update(uint32 index, uint32 value) external
```

Updates the value at the specified index in the segment tree.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint32 | The index of the value to update. |
| value | uint32 | The value to update the index with. |

### get

```solidity
function get(uint32 index) external view returns (uint32)
```

Gets the value at the specified index in the segment tree.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint32 | The index of the value to get. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The value at the specified index in the segment tree. |

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
function query(uint32 left, uint32 right) external view returns (uint256)
```

Calculates the sum of the values in the segment tree within the specified range.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| left | uint32 | The starting index (inclusive) of the values to sum. |
| right | uint32 | The ending index (exclusive) of the values to sum. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The sum of the values in the segment tree within the specified range. |

