## OrderId

## OrderIdLibrary

### encode

```solidity
function encode(BookId bookId, Tick tick, uint40 index) internal pure returns (OrderId id)
```

_Encode the order id._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| bookId | BookId | The book id. |
| tick | Tick | The tick. |
| index | uint40 | The index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | OrderId | The order id. |

### decode

```solidity
function decode(OrderId id) internal pure returns (BookId bookId, Tick tick, uint40 index)
```

### getBookId

```solidity
function getBookId(OrderId id) internal pure returns (BookId bookId)
```

### getTick

```solidity
function getTick(OrderId id) internal pure returns (Tick tick)
```

### getIndex

```solidity
function getIndex(OrderId id) internal pure returns (uint40 index)
```

