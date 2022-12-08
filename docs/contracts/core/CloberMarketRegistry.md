## CloberMarketRegistry

### MarketRegister

```solidity
event MarketRegister(address market)
```

Emitted by the registry when a new market has been registered

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |

### MarketUnregister

```solidity
event MarketUnregister(address market)
```

Emitted by the registry when a registered market has been unregistered

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the registered market |

### ChangeName

```solidity
event ChangeName(address market, string newName)
```

Emitted by the registry when the name of a registered market has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the registered market |
| newName | string | The new name of the market |

### ChangeFee

```solidity
event ChangeFee(address market, int24 makeFee, int24 takeFee)
```

Emitted by the registry when the fee parameters of a registered market have been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the registered market |
| makeFee | int24 | The new make fee |
| takeFee | int24 | The new take fee |

### ChangeFeeReceiver

```solidity
event ChangeFeeReceiver(address previousReceiver, address newReceiver)
```

Emitted by the registry when the protocol fee receiver address has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousReceiver | address | The address of the previous fee receiver |
| newReceiver | address | The address of the new fee receiver |

### ChangeOwner

```solidity
event ChangeOwner(address previousOwner, address newOwner)
```

Emitted by the registry when the address of the market owner has been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousOwner | address | The address of the previous market owner |
| newOwner | address | The address of the new market owner |

### MarketType

```solidity
enum MarketType {
  DEFAULT,
  STABLE
}
```

### MarketInfo

```solidity
struct MarketInfo {
  uint24 index;
  address quoteToken;
  int24 makeFee;
  int24 takeFee;
  address baseToken;
  enum CloberMarketRegistry.MarketType marketType;
  uint88 quoteUnit;
  string name;
}
```

### changeOwner

```solidity
function changeOwner(address newOwner) external
```

Change the market owner address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newOwner | address | The address of the new market owner |

### setFeeReceiver

```solidity
function setFeeReceiver(address receiver) external
```

Update the protocol fee receiver address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiver | address | The address of the fee receiver |

### register

```solidity
function register(address market, address quoteToken, address baseToken, uint88 quoteUnit, int24 makeFee, int24 takeFee, enum CloberMarketRegistry.MarketType marketType, string name) external
```

Register a new market to the registry

_Only the admin can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |
| quoteToken | address | The quote token address |
| baseToken | address | The base token address |
| quoteUnit | uint88 | The smallest unit amount of the quote token |
| makeFee | int24 | The make fee value |
| takeFee | int24 | The take fee value |
| marketType | enum CloberMarketRegistry.MarketType | The type of the market. Either DEFAULT or STABLE.        Default is for general market pairs such as ETH-USDC while STABLE is for assets        that have stable values such as USDT-USDC or stETH-ETH. |
| name | string | The name of the market to register |

### unregister

```solidity
function unregister(address market) external
```

Unregister the registered market

_Only the admin can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the registered market |

### updateMarketName

```solidity
function updateMarketName(address market, string name) external
```

Update the name of the registered market

_Only the admin can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |
| name | string | The new name of the market |

### updateMarketFee

```solidity
function updateMarketFee(address market, int24 makeFee, int24 takeFee) external
```

Update the fee parameters of the registered market

_Only the admin can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the registered market |
| makeFee | int24 | The new make fee |
| takeFee | int24 | The new take fee |

### feeReceiver

```solidity
function feeReceiver() external view returns (address)
```

Returns the address of the protocol fee receiver

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the protocol fee receiver |

### lastUpdatedAt

```solidity
function lastUpdatedAt() external view returns (uint256)
```

Returns the block timestamp for when the registry has been last changed

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The UTC timestamp in seconds |

### owner

```solidity
function owner() external view returns (address)
```

Returns the address of the market owner

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market owner |

### findMarket

```solidity
function findMarket(address quoteToken, address baseToken, uint88 quoteUnit, enum CloberMarketRegistry.MarketType marketType) external view returns (address)
```

Returns a zero address or the address of the market matched with given parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The quote token address of the market to find |
| baseToken | address | The base token address of the market to find |
| quoteUnit | uint88 | The smallest unit amount of the quote token of the market to find |
| marketType | enum CloberMarketRegistry.MarketType | The type of the market to find |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market |

### calculateId

```solidity
function calculateId(address quoteToken, address baseToken, uint88 quoteUnit, enum CloberMarketRegistry.MarketType marketType) external pure returns (bytes32)
```

Calculate the id of the market used by the registry

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The quote token address of the market |
| baseToken | address | The base token address of the market |
| quoteUnit | uint88 | The smallest unit amount of the quote token of the market |
| marketType | enum CloberMarketRegistry.MarketType | The type of the market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | The id of the market |

### isRegistered

```solidity
function isRegistered(address market) external view returns (bool)
```

Returns whether the given market address had been registered or not

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean flag representing whether the market has been registered or not |

### getMarketInfo

```solidity
function getMarketInfo(address market) external view returns (struct CloberMarketRegistry.MarketInfo)
```

Returns the registered market information

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberMarketRegistry.MarketInfo | The information object of the market |

### getMarketByIndex

```solidity
function getMarketByIndex(uint256 index) external view returns (address)
```

Returns the address of the registered market by the index

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint256 | The index of the market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market |

### getMarketList

```solidity
function getMarketList() external view returns (address[])
```

Returns a list of all the registered markets

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | The address list of the markets |

### getMarketInfoList

```solidity
function getMarketInfoList() external view returns (struct CloberMarketRegistry.MarketInfo[])
```

Returns a list of all the registered markets' information

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberMarketRegistry.MarketInfo[] | A list of all the market information objects |

### getMarketById

```solidity
function getMarketById(bytes32 id) external view returns (address)
```

Returns a zero address or the address of the registered market from the id

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | The market id |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market |

