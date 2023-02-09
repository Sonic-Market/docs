## CloberOctopusHeap

Heap data structure that can hold up to 256 uint16 values.
In each node, the quotient of the value to be pushed divided by 2^8 is written,
and the remainder is expressed by flagging a bit on the uint256 at the index equal to the value of the remainder.

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

### root

```solidity
function root() external view returns (uint16)
```

Returns the root value of the heap.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | The root value of the heap. |

### store

```solidity
function store(uint8 index, uint32 value) external
```

Stores a value at a specified index in the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint8 | The index at which to store the value. |
| value | uint32 | The value to store. |

### load

```solidity
function load(uint8 index) external view returns (uint32)
```

Loads a value from a specified index in the heap.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint8 | The index from which to load the value. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The value stored at the specified index. |

