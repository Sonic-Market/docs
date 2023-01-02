## CloberMarketFactory

### CreateVolatileMarket

```solidity
event CreateVolatileMarket(address market, address quoteToken, address baseToken, uint256 quoteUnit, int96 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 r)
```

Emitted by the factory when it generates a new market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint256 | The amount that one raw amount represent in quote token |
| nonce | int96 | The seed number to generate market address |
| makerFee | int24 | The value of the make fee.        Paid to the maker when negative, paid by the maker when positive.        Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee.        Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
| a | uint128 | Scale factor |
| r | uint128 | Common ratio |

### CreateStableMarket

```solidity
event CreateStableMarket(address market, address quoteToken, address baseToken, uint256 quoteUnit, int96 nonce, int24 makerFee, uint24 takerFee, uint128 a, uint128 d)
```

Emitted by the factory when it generates a new market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint256 | The amount that one raw amount represent in quote token |
| nonce | int96 | The seed number to generate market address |
| makerFee | int24 | The value of the make fee.        Paid to the maker when negative, paid by the maker when positive.        Every 10000 represents a 1% fee on trade volume. |
| takerFee | uint24 | The value of the take fee.        Paid by the taker. Every 10000 represents a 1% fee on trade volume. |
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

### daoTreasury

```solidity
function daoTreasury() external view returns (address)
```

Returns the address of the DAO Treasury

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the DAO Treasury |

### owner

```solidity
function owner() external view returns (address)
```

Returns the address of the factory owner

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the factory owner |

### nonce

```solidity
function nonce() external view returns (int96)
```

Returns the abs value of the next seed number to generate a market

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int96 | The integer value of nonce |

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

### changeOwner

```solidity
function changeOwner(address newOwner) external
```

Change the factory owner address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newOwner | address | The address of the new factory owner |

### getMarketHost

```solidity
function getMarketHost(address market) external view returns (address)
```

Returns the host address of the given market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the target market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The host address of the market |

### handOverHost

```solidity
function handOverHost(address market, address newHost) external
```

Hand over the right of the host to a new address

_Only the market host can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the target market |
| newHost | address | The address of a new host |

### computeTokenAddress

```solidity
function computeTokenAddress(int96 nonce_) external view returns (address)
```

