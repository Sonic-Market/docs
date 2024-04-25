## IHooks

Interface for the hooks contract

### beforeOpen

```solidity
function beforeOpen(address sender, struct IBookManager.BookKey key, bytes hookData) external returns (bytes4)
```

Hook called before opening a new book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the open transaction |
| key | struct IBookManager.BookKey | The key of the book being opened |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### afterOpen

```solidity
function afterOpen(address sender, struct IBookManager.BookKey key, bytes hookData) external returns (bytes4)
```

Hook called after opening a new book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the open transaction |
| key | struct IBookManager.BookKey | The key of the book being opened |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### beforeMake

```solidity
function beforeMake(address sender, struct IBookManager.MakeParams params, bytes hookData) external returns (bytes4)
```

Hook called before making a new order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the make transaction |
| params | struct IBookManager.MakeParams | The parameters of the make transaction |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### afterMake

```solidity
function afterMake(address sender, struct IBookManager.MakeParams params, OrderId orderId, bytes hookData) external returns (bytes4)
```

Hook called after making a new order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the make transaction |
| params | struct IBookManager.MakeParams | The parameters of the make transaction |
| orderId | OrderId | The id of the order that was made |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### beforeTake

```solidity
function beforeTake(address sender, struct IBookManager.TakeParams params, bytes hookData) external returns (bytes4)
```

Hook called before taking an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the take transaction |
| params | struct IBookManager.TakeParams | The parameters of the take transaction |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### afterTake

```solidity
function afterTake(address sender, struct IBookManager.TakeParams params, uint64 takenUnit, bytes hookData) external returns (bytes4)
```

Hook called after taking an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the take transaction |
| params | struct IBookManager.TakeParams | The parameters of the take transaction |
| takenUnit | uint64 | The unit that was taken |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### beforeCancel

```solidity
function beforeCancel(address sender, struct IBookManager.CancelParams params, bytes hookData) external returns (bytes4)
```

Hook called before canceling an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the cancel transaction |
| params | struct IBookManager.CancelParams | The parameters of the cancel transaction |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### afterCancel

```solidity
function afterCancel(address sender, struct IBookManager.CancelParams params, uint64 canceledUnit, bytes hookData) external returns (bytes4)
```

Hook called after canceling an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the cancel transaction |
| params | struct IBookManager.CancelParams | The parameters of the cancel transaction |
| canceledUnit | uint64 | The unit that was canceled |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### beforeClaim

```solidity
function beforeClaim(address sender, OrderId orderId, bytes hookData) external returns (bytes4)
```

Hook called before claiming an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the claim transaction |
| orderId | OrderId | The id of the order being claimed |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

### afterClaim

```solidity
function afterClaim(address sender, OrderId orderId, uint64 claimedUnit, bytes hookData) external returns (bytes4)
```

Hook called after claiming an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The sender of the claim transaction |
| orderId | OrderId | The id of the order being claimed |
| claimedUnit | uint64 | The unit that was claimed |
| hookData | bytes | The data passed to the hook |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | Returns the function selector if the hook is successful |

