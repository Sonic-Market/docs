## CloberMarketFactory

### CreateVolatileMarket

```solidity
event CreateVolatileMarket(address market, address orderToken, address quoteToken, address baseToken, uint256 quoteUnit, uint256 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 r)
```

Emitted by the factory when it generates a new market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market |
| orderToken | address | The address of the new market's order token |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint256 | The amount that one raw amount represent in quote token |
| nonce | uint256 | The seed number to generate a market |
| makerFee | int24 | The value of the make fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | Scale factor |
| r | uint128 | Common ratio |

### CreateStableMarket

```solidity
event CreateStableMarket(address market, address orderToken, address quoteToken, address baseToken, uint256 quoteUnit, uint256 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 d)
```

Emitted by the factory when it generates a new market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market |
| orderToken | address | The address of the new market's order token |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint256 | The amount that one raw amount represent in quote token |
| nonce | uint256 | The seed number to generate a market |
| makerFee | int24 | The value of the make fee. Paid to the maker when negative, paid by the maker when positive. Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee. Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | Initial term of the arithmetic progression |
| d | uint128 | The common difference of successive members |

### ChangeOwner

```solidity
event ChangeOwner(address previousOwner, address newOwner)
```

Emitted by the factory when the address of the owner has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousOwner | address | The address of the previous owner |
| newOwner | address | The address of the new owner |

### ChangeDaoTreasury

```solidity
event ChangeDaoTreasury(address previousTreasury, address newTreasury)
```

Emitted by the factory when the DAO Treasury address has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousTreasury | address | The address of the previous DAO Treasury |
| newTreasury | address | The address of the new DAO Treasury |

### ChangeHost

```solidity
event ChangeHost(address market, address previousHost, address newHost)
```

Emitted by the market when the host address has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the target market |
| previousHost | address | The address of the previous host |
| newHost | address | The address of a new host |

### volatileMarketDeployer

```solidity
function volatileMarketDeployer() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the VolatileMarketDeployer |

### stableMarketDeployer

```solidity
function stableMarketDeployer() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the StableMarketDeployer |

### canceler

```solidity
function canceler() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the OrderCanceler |

### registeredQuoteTokens

```solidity
function registeredQuoteTokens(address token) external view returns (bool)
```

_Returns whether the specified token address has been registered as a quote token._

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

Returns the next seed number to generate a market

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The next seed number to generate a market |

### createVolatileMarket

```solidity
function createVolatileMarket(address host, address quoteToken, address baseToken, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 r) external returns (address)
```

Create new market with VolatilePriceBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| host | address | The address of a new market's host |
| quoteToken | address | The address of a new market's quote token |
| baseToken | address | The address of a new market's base token |
| quoteUnit | uint96 | The amount that one raw amount represent in quote token |
| makerFee | int24 | The percentage of maker fee in OrderBook._FEE_PRECISION |
| takerFee | uint24 | The percentage of taker fee in OrderBook._FEE_PRECISION |
| a | uint128 | Scale factor |
| r | uint128 | Common ratio |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market |

### createStableMarket

```solidity
function createStableMarket(address host, address quoteToken, address baseToken, uint96 quoteUnit, int24 makerFee, uint24 takerFee, uint128 a, uint128 d) external returns (address)
```

Create new market with StablePriceBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| host | address | The address of a new market's host |
| quoteToken | address | The address of a new market's quote token |
| baseToken | address | The address of a new market's base token |
| quoteUnit | uint96 | The amount that one raw amount represent in quote token |
| makerFee | int24 | The percentage of maker fee in OrderBook._FEE_PRECISION |
| takerFee | uint24 | The percentage of taker fee in OrderBook._FEE_PRECISION |
| a | uint128 | Initial term of the arithmetic progression |
| d | uint128 | The common difference of successive members |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market |

### changeDaoTreasury

```solidity
function changeDaoTreasury(address treasury) external
```

Change the DAO Treasury address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| treasury | address | The address of the DAO Treasury |

### prepareChangeOwner

```solidity
function prepareChangeOwner(address newOwner) external
```

Sets the new owner address for the contract.

_Only the factory owner can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newOwner | address | The new owner address for the contract. |

### executeChangeOwner

```solidity
function executeChangeOwner() external
```

Changes the owner of the contract to the address set by prepareChangeOwner function.

_Only the future owner can call this function_

### getMarketHost

```solidity
function getMarketHost(address market) external view returns (address)
```

{
Returns the host address of the given market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the target market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The host address of the market |

### prepareHandOverHost

```solidity
function prepareHandOverHost(address market, address newHost) external
```

Sets the new host address for the given market address.

_Only the market host can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The market address for which the host will be changed. |
| newHost | address | The new host address for the given market. |

### executeHandOverHost

```solidity
function executeHandOverHost(address market) external
```

Changes the host address of the given market to the address set by prepareHandOverHost function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The market address for which the host will be changed. |

### computeTokenAddress

```solidity
function computeTokenAddress(uint256 nonce_) external view returns (address)
```

Compute OrderNFT contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nonce_ | uint256 | The seed number to compute OrderNFT contract address via CREATE2 |

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

Returns the price book information of the market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketInfo | struct CloberMarketFactory.MarketInfo | The MarketInfo structure of the given market |

### setQuoteTokenRegistration

```solidity
function setQuoteTokenRegistration(address token, bool registered) external
```

Registers or unregisters the specified token address as a quote token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to register or unregister. |
| registered | bool | Whether to register or unregister the token. |

### encodeOrderTokenName

```solidity
function encodeOrderTokenName(address quoteToken, address baseToken, uint256 nonce_) external view returns (string)
```

Encodes the name of the order token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of a new market's quote token |
| baseToken | address | The address of a new market's base token |
| nonce_ | uint256 | The seed number to generate a market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The name of the order token |

### encodeOrderTokenSymbol

```solidity
function encodeOrderTokenSymbol(address quoteToken, address baseToken, uint256 nonce_) external view returns (string)
```

Encodes the symbol of the order token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of a new market's quote token |
| baseToken | address | The address of a new market's base token |
| nonce_ | uint256 | The seed number to generate a market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The symbol of the order token |

