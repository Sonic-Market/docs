## IBookManager

The interface for the BookManager contract

### InvalidUnitSize

```solidity
error InvalidUnitSize()
```

### InvalidFeePolicy

```solidity
error InvalidFeePolicy()
```

### InvalidProvider

```solidity
error InvalidProvider(address provider)
```

### LockedBy

```solidity
error LockedBy(address locker, address hook)
```

### CurrencyNotSettled

```solidity
error CurrencyNotSettled()
```

### Open

```solidity
event Open(BookId id, Currency base, Currency quote, uint64 unitSize, FeePolicy makerPolicy, FeePolicy takerPolicy, contract IHooks hooks)
```

Event emitted when a new book is opened

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book id |
| base | Currency | The base currency |
| quote | Currency | The quote currency |
| unitSize | uint64 | The unit size of the book |
| makerPolicy | FeePolicy | The maker fee policy |
| takerPolicy | FeePolicy | The taker fee policy |
| hooks | contract IHooks | The hooks contract |

### Make

```solidity
event Make(BookId bookId, address user, Tick tick, uint256 orderIndex, uint64 unit, address provider)
```

Event emitted when a new order is made

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| bookId | BookId | The book id |
| user | address | The user address |
| tick | Tick | The order tick |
| orderIndex | uint256 | The order index |
| unit | uint64 | The order unit |
| provider | address | The provider address |

### Take

```solidity
event Take(BookId bookId, address user, Tick tick, uint64 unit)
```

Event emitted when an order is taken

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| bookId | BookId | The book id |
| user | address | The user address |
| tick | Tick | The order tick |
| unit | uint64 | The order unit |

### Cancel

```solidity
event Cancel(OrderId orderId, uint64 unit)
```

Event emitted when an order is canceled

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderId | OrderId | The order id |
| unit | uint64 | The canceled unit |

### Claim

```solidity
event Claim(OrderId orderId, uint64 unit)
```

Event emitted when an order is claimed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderId | OrderId | The order id |
| unit | uint64 | The claimed unit |

### Whitelist

```solidity
event Whitelist(address provider)
```

Event emitted when a provider is whitelisted

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider address |

### Delist

```solidity
event Delist(address provider)
```

Event emitted when a provider is delisted

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider address |

### Collect

```solidity
event Collect(address provider, address recipient, Currency currency, uint256 amount)
```

Event emitted when a provider collects fees

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider address |
| recipient | address | The recipient address |
| currency | Currency | The currency |
| amount | uint256 | The collected amount |

### SetDefaultProvider

```solidity
event SetDefaultProvider(address newDefaultProvider)
```

Event emitted when new default provider is set

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newDefaultProvider | address | The new default provider address |

### BookKey

This structure represents a unique identifier for a book in the BookManager.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct BookKey {
  Currency base;
  uint64 unitSize;
  Currency quote;
  FeePolicy makerPolicy;
  contract IHooks hooks;
  FeePolicy takerPolicy;
}
```

### baseURI

```solidity
function baseURI() external view returns (string)
```

Returns the base URI

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The base URI |

### contractURI

```solidity
function contractURI() external view returns (string)
```

Returns the contract URI

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The contract URI |

### defaultProvider

```solidity
function defaultProvider() external view returns (address)
```

Returns the default provider

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The default provider |

### currencyDelta

```solidity
function currencyDelta(address locker, Currency currency) external view returns (int256)
```

Calculates the currency balance changes for a given locker

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| locker | address | The address of the locker |
| currency | Currency | The currency in question |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | The net change in currency balance |

### reservesOf

```solidity
function reservesOf(Currency currency) external view returns (uint256)
```

Returns the total reserves of a given currency

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| currency | Currency | The currency in question |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total reserves amount |

### isWhitelisted

```solidity
function isWhitelisted(address provider) external view returns (bool)
```

Checks if a provider is whitelisted

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The address of the provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the provider is whitelisted, false otherwise |

### checkAuthorized

```solidity
function checkAuthorized(address owner, address spender, uint256 tokenId) external view
```

Verifies if an owner has authorized a spender for a token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The address of the token owner |
| spender | address | The address of the spender |
| tokenId | uint256 | The token ID |

### tokenOwed

```solidity
function tokenOwed(address provider, Currency currency) external view returns (uint256)
```

Calculates the amount owed to a provider in a given currency

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider's address |
| currency | Currency | The currency in question |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The owed amount |

### getBookKey

```solidity
function getBookKey(BookId id) external view returns (struct IBookManager.BookKey)
```

Retrieves the book key for a given book ID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IBookManager.BookKey | The book key |

### OrderInfo

This structure represents a current status for an order in the BookManager.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct OrderInfo {
  address provider;
  uint64 open;
  uint64 claimable;
}
```

### getOrder

```solidity
function getOrder(OrderId id) external view returns (struct IBookManager.OrderInfo)
```

Provides information about an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | OrderId | The order ID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IBookManager.OrderInfo | Order information including provider, open status, and claimable unit |

### getLock

```solidity
function getLock(uint256 i) external view returns (address locker, address lockCaller)
```

Retrieves the locker and caller addresses for a given lock

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| i | uint256 | The index of the lock |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| locker | address | The locker's address |
| lockCaller | address | The caller's address |

### getLockData

```solidity
function getLockData() external view returns (uint128, uint128)
```

Provides the lock data

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint128 | The lock data including necessary numeric values |
| [1] | uint128 |  |

### getDepth

```solidity
function getDepth(BookId id, Tick tick) external view returns (uint64)
```

Returns the depth of a given book ID and tick

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |
| tick | Tick | The tick |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The depth of the tick |

### getHighest

```solidity
function getHighest(BookId id) external view returns (Tick tick)
```

Retrieves the highest tick for a given book ID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| tick | Tick | The highest tick |

### maxLessThan

```solidity
function maxLessThan(BookId id, Tick tick) external view returns (Tick)
```

Finds the maximum tick less than a specified tick in a book

_Returns `Tick.wrap(type(int24).min)` if the specified tick is the lowest_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |
| tick | Tick | The specified tick |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Tick | The next lower tick |

### isOpened

```solidity
function isOpened(BookId id) external view returns (bool)
```

Checks if a book is opened

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the book is opened, false otherwise |

### isEmpty

```solidity
function isEmpty(BookId id) external view returns (bool)
```

Checks if a book is empty

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | BookId | The book ID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the book is empty, false otherwise |

### encodeBookKey

```solidity
function encodeBookKey(struct IBookManager.BookKey key) external pure returns (BookId)
```

Encodes a BookKey into a BookId

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | struct IBookManager.BookKey | The BookKey to encode |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | BookId | The encoded BookId |

### load

```solidity
function load(bytes32 slot) external view returns (bytes32)
```

Loads a value from a specific storage slot

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| slot | bytes32 | The storage slot |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | The value in the slot |

### load

```solidity
function load(bytes32 startSlot, uint256 nSlot) external view returns (bytes)
```

Loads a sequence of values starting from a specific slot

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| startSlot | bytes32 | The starting slot |
| nSlot | uint256 | The number of slots to load |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | The sequence of values |

### open

```solidity
function open(struct IBookManager.BookKey key, bytes hookData) external
```

Opens a new book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | struct IBookManager.BookKey | The book key |
| hookData | bytes | The hook data |

### lock

```solidity
function lock(address locker, bytes data) external returns (bytes)
```

Locks a book manager function

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| locker | address | The locker address |
| data | bytes | The lock data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | The lock return data |

### MakeParams

This structure represents the parameters for making an order.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct MakeParams {
  struct IBookManager.BookKey key;
  Tick tick;
  uint64 unit;
  address provider;
}
```

### make

```solidity
function make(struct IBookManager.MakeParams params, bytes hookData) external returns (OrderId id, uint256 quoteAmount)
```

Make a limit order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct IBookManager.MakeParams | The order parameters |
| hookData | bytes | The hook data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | OrderId | The order id. Returns 0 if the order is not settled |
| quoteAmount | uint256 | The amount of quote currency to be paid |

### TakeParams

This structure represents the parameters for taking orders in the specified tick.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct TakeParams {
  struct IBookManager.BookKey key;
  Tick tick;
  uint64 maxUnit;
}
```

### take

```solidity
function take(struct IBookManager.TakeParams params, bytes hookData) external returns (uint256 quoteAmount, uint256 baseAmount)
```

Take a limit order at specific tick

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct IBookManager.TakeParams | The order parameters |
| hookData | bytes | The hook data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteAmount | uint256 | The amount of quote currency to be received |
| baseAmount | uint256 | The amount of base currency to be paid |

### CancelParams

This structure represents the parameters for canceling an order.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct CancelParams {
  OrderId id;
  uint64 toUnit;
}
```

### cancel

```solidity
function cancel(struct IBookManager.CancelParams params, bytes hookData) external returns (uint256 canceledAmount)
```

Cancel a limit order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct IBookManager.CancelParams | The order parameters |
| hookData | bytes | The hook data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| canceledAmount | uint256 | The amount of quote currency canceled |

### claim

```solidity
function claim(OrderId id, bytes hookData) external returns (uint256 claimedAmount)
```

Claims an order

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | OrderId | The order ID |
| hookData | bytes | The hook data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimedAmount | uint256 | The amount claimed |

### collect

```solidity
function collect(address recipient, Currency currency) external returns (uint256)
```

Collects fees from a provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient address |
| currency | Currency | The currency |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The collected amount |

### withdraw

```solidity
function withdraw(Currency currency, address to, uint256 amount) external
```

Withdraws a currency

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| currency | Currency | The currency |
| to | address | The recipient address |
| amount | uint256 | The amount |

### settle

```solidity
function settle(Currency currency) external payable returns (uint256)
```

Settles a currency

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| currency | Currency | The currency |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The settled amount |

### whitelist

```solidity
function whitelist(address provider) external
```

Whitelists a provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider address |

### delist

```solidity
function delist(address provider) external
```

Delists a provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | address | The provider address |

### setDefaultProvider

```solidity
function setDefaultProvider(address newDefaultProvider) external
```

Sets the default provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newDefaultProvider | address | The new default provider address |

