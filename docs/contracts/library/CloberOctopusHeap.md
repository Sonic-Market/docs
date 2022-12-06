# CloberOctopusHeap

## CloberOctopusHeap

### init

```solidity
function init() external
```

Initializes the heap.

### has

```solidity
function has(uint16 value) external view returns (bool)
```

Checks if the specified value is present in the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint16 | The value to check for. |

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
function push(uint16 value) external
```

Pushes a value onto the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint16 | The value to push onto the heap. |

### pop

```solidity
function pop() external
```

Pops a value from the heap.

