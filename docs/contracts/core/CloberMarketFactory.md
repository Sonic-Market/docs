## CloberMarketFactory

### CreateVolatileMarket

```solidity
event CreateVolatileMarket(address market, address orderToken, address quoteToken, address baseToken, uint256 quoteUnit, uint256 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 r)
```

Emitted when a new volatile market is created.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market. |
| orderToken | address | The address of the new market's order token. |
| quoteToken | address | The address of the new market's quote token. |
| baseToken | address | The address of the new market's base token. |
| quoteUnit | uint256 | The amount that one raw amount represents in quote tokens. |
| nonce | uint256 | The nonce for this market. |
| makerFee | int24 | The maker fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The taker fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | The scale factor of the price points. |
| r | uint128 | The common ratio between price points. |

### CreateStableMarket

```solidity
event CreateStableMarket(address market, address orderToken, address quoteToken, address baseToken, uint256 quoteUnit, uint256 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 d)
```

Emitted when a new stable market is created.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market. |
| orderToken | address | The address of the new market's order token. |
| quoteToken | address | The address of the new market's quote token. |
| baseToken | address | The address of the new market's base token. |
| quoteUnit | uint256 | The amount that one raw amount represents in quote tokens. |
| nonce | uint256 | The nonce for this market. |
| makerFee | int24 | The maker fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The taker fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | The starting price point. |
| d | uint128 | The common difference between price points. |

### ChangeOwner

```solidity
event ChangeOwner(address previousOwner, address newOwner)
```

Emitted when the address of the owner has changed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousOwner | address | The address of the previous owner. |
| newOwner | address | The address of the new owner. |

### ChangeDaoTreasury

```solidity
event ChangeDaoTreasury(address previousTreasury, address newTreasury)
```

Emitted when the DAO Treasury address has changed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousTreasury | address | The address of the previous DAO Treasury. |
| newTreasury | address | The address of the new DAO Treasury. |

### ChangeHost

```solidity
event ChangeHost(address market, address previousHost, address newHost)
```

Emitted when the host address has changed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market that had a change of hosts. |
| previousHost | address | The address of the previous host. |
| newHost | address | The address of a new host. |

### deployedGeometricPriceBook

```solidity
function deployedGeometricPriceBook(uint128 a, uint128 r) external view returns (address)
```

Returns the address of the deployed GeometricPriceBook.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the GeometricPriceBook. |

### deployedArithmeticPriceBook

```solidity
function deployedArithmeticPriceBook(uint128 a, uint128 d) external view returns (address)
```

Returns the address of the deployed GeometricPriceBook.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the GeometricPriceBook. |

### marketDeployer

```solidity
function marketDeployer() external view returns (address)
```

Returns the address of the MarketDeployer.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the MarketDeployer. |

### priceBookDeployer

```solidity
function priceBookDeployer() external view returns (address)
```

Returns the address of the priceBookDeployer.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the priceBookDeployer. |

### orderTokenDeployer

```solidity
function orderTokenDeployer() external view returns (address)
```

Returns the address of the orderTokenDeployer.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the orderTokenDeployer. |

### canceler

```solidity
function canceler() external view returns (address)
```

Returns the address of the OrderCanceler.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the OrderCanceler. |

### registeredQuoteTokens

```solidity
function registeredQuoteTokens(address token) external view returns (bool)
```

Returns whether the specified token address has been registered as a quote token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to check. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool Whether the token is registered as a quote token. |

### owner

```solidity
function owner() external view returns (address)
```

Returns the address of the factory owner

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the factory owner |

### futureOwner

```solidity
function futureOwner() external view returns (address)
```

Returns the address of the factory owner candidate

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the factory owner candidate |

### daoTreasury

```solidity
function daoTreasury() external view returns (address)
```

Returns the address of the DAO Treasury

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the DAO Treasury |

### nonce

```solidity
function nonce() external view returns (uint256)
```

Returns the current nonce

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current nonce |

### createVolatileMarket

```solidity
function createVolatileMarket(address host, address quoteToken, address baseToken, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 r) external returns (address)
```

Creates a new market with a VolatilePriceBook.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| host | address | The address of the new market's host. |
| quoteToken | address | The address of the new market's quote token. |
| baseToken | address | The address of the new market's base token. |
| quoteUnit | uint96 | The amount that one raw amount represents in quote tokens. |
| makerFee | int24 | The maker fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The taker fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | The scale factor of the price points. |
| r | uint128 | The common ratio between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market. |

### createStableMarket

```solidity
function createStableMarket(address host, address quoteToken, address baseToken, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 d) external returns (address)
```

Creates a new market with a StablePriceBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| host | address | The address of the new market's host |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint96 | The amount that one raw amount represents in quote tokens |
| makerFee | int24 | The maker fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The taker fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | The starting price point. |
| d | uint128 | The common difference between price points. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market. |

### changeDaoTreasury

```solidity
function changeDaoTreasury(address treasury) external
```

Change the DAO Treasury address.

_Only the factory owner can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| treasury | address | The new address of the DAO Treasury. |

### prepareChangeOwner

```solidity
function prepareChangeOwner(address newOwner) external
```

Sets the new owner address for this contract.

_Only the factory owner can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newOwner | address | The new owner address for this contract. |

### executeChangeOwner

```solidity
function executeChangeOwner() external
```

Changes the owner of this contract to the address set by `prepareChangeOwner`.

_Only the future owner can call this function._

### getMarketHost

```solidity
function getMarketHost(address market) external view returns (address)
```

Returns the host address of the given market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the target market. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The host address of the market. |

### prepareHandOverHost

```solidity
function prepareHandOverHost(address market, address newHost) external
```

Prepares to set a new host address for the given market address.

_Only the market host can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The market address for which the host will be changed. |
| newHost | address | The new host address for the given market. |

### executeHandOverHost

```solidity
function executeHandOverHost(address market) external
```

Changes the host address of the given market to the address set by `prepareHandOverHost`.

_Only the future market host can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The market address for which the host will be changed. |

### MarketType

```solidity
enum MarketType {
  NONE,
  VOLATILE,
  STABLE
}
```

### MarketInfo

```solidity
struct MarketInfo {
  address host;
  enum CloberMarketFactory.MarketType marketType;
  uint128 a;
  uint128 factor;
  address futureHost;
}
```

### getMarketInfo

```solidity
function getMarketInfo(address market) external view returns (struct CloberMarketFactory.MarketInfo marketInfo)
```

Returns key information about the market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketInfo | struct CloberMarketFactory.MarketInfo | The MarketInfo structure of the given market. |

### registerQuoteToken

```solidity
function registerQuoteToken(address token) external
```

Allows the specified token to be used as the quote token.

_Only the factory owner can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to register. |

### unregisterQuoteToken

```solidity
function unregisterQuoteToken(address token) external
```

Revokes the token's right to be used as a quote token.

_Only the factory owner can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to unregister. |

### formatOrderTokenName

```solidity
function formatOrderTokenName(address quoteToken, address baseToken, uint256 marketNonce) external view returns (string)
```

Returns the order token name.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of the market's quote token. |
| baseToken | address | The address of the market's base token. |
| marketNonce | uint256 | The market nonce. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The order token name. |

### formatOrderTokenSymbol

```solidity
function formatOrderTokenSymbol(address quoteToken, address baseToken, uint256 marketNonce) external view returns (string)
```

Returns the order token symbol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of a new market's quote token. |
| baseToken | address | The address of a new market's base token. |
| marketNonce | uint256 | The market nonce. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The order token symbol. |

