## Book

### ZeroUnit

```solidity
error ZeroUnit()
```

### BookAlreadyOpened

```solidity
error BookAlreadyOpened()
```

### BookNotOpened

```solidity
error BookNotOpened()
```

### QueueReplaceFailed

```solidity
error QueueReplaceFailed()
```

### CancelFailed

```solidity
error CancelFailed(uint64 maxCancelableUnit)
```

### MAX_ORDER

```solidity
uint40 MAX_ORDER
```

### MAX_ORDER_M

```solidity
uint256 MAX_ORDER_M
```

### Order

```solidity
struct Order {
  address provider;
  uint64 pending;
}
```

### Queue

```solidity
struct Queue {
  struct SegmentedSegmentTree.Core tree;
  struct Book.Order[] orders;
}
```

### State

```solidity
struct State {
  struct IBookManager.BookKey key;
  mapping(Tick => struct Book.Queue) queues;
  mapping(uint256 => uint256) tickBitmap;
  mapping(uint24 => uint256) totalClaimableOf;
}
```

### open

```solidity
function open(struct Book.State self, struct IBookManager.BookKey key) external
```

### isOpened

```solidity
function isOpened(struct Book.State self) internal view returns (bool)
```

### checkOpened

```solidity
function checkOpened(struct Book.State self) internal view
```

### depth

```solidity
function depth(struct Book.State self, Tick tick) internal view returns (uint64)
```

### highest

```solidity
function highest(struct Book.State self) internal view returns (Tick)
```

### maxLessThan

```solidity
function maxLessThan(struct Book.State self, Tick tick) internal view returns (Tick)
```

### isEmpty

```solidity
function isEmpty(struct Book.State self) internal view returns (bool)
```

### getOrder

```solidity
function getOrder(struct Book.State self, Tick tick, uint40 index) internal view returns (struct Book.Order)
```

### make

```solidity
function make(struct Book.State self, Tick tick, uint64 unit, address provider) external returns (uint40 orderIndex)
```

### take

```solidity
function take(struct Book.State self, Tick tick, uint64 maxTakeUnit) external returns (uint64 takenUnit)
```

Take orders from the book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Book.State | The book state |
| tick | Tick |  |
| maxTakeUnit | uint64 | The maximum unit to take |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takenUnit | uint64 | The actual unit to take |

### cancel

```solidity
function cancel(struct Book.State self, OrderId orderId, uint64 to) external returns (uint64 canceled, uint64 afterPending)
```

### claim

```solidity
function claim(struct Book.State self, Tick tick, uint40 index) external returns (uint64 claimedUnit)
```

### calculateClaimableUnit

```solidity
function calculateClaimableUnit(struct Book.State self, Tick tick, uint40 index) public view returns (uint64)
```

