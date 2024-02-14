## CloberHeap

Heap data structure that can hold up to 256 uint16 values.
Each value is stored by having the quotient divided by 2^8 added to the heap,
and the remainder expressed as a flag on a bitmap.

### has

```solidity
function has(uint24 value) external view returns (bool)
```

Checks if the specified value is present in the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint24 | The value to check for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the value is present in the heap, false otherwise. |

### isEmpty

```solidity
function isEmpty() external view returns (bool)
```

Checks if the heap is empty.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the heap is empty, false otherwise. |

### push

```solidity
function push(uint24 value) external
```

Pushes a value onto the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint24 | The value to push onto the heap. |

### pop

```solidity
function pop() external
```

Pops a value from the heap.

### root

```solidity
function root() external view returns (uint24)
```

Returns the root value of the heap.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | The root value of the heap. |

