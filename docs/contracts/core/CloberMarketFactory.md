# CloberMarketFactory

## CloberMarketFactory

### CreateMarket

```solidity
event CreateMarket(address market, address impl, address quoteToken, address baseToken, uint256 quoteUnit)
```

Emitted by the factory when it generates a new market

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the new market |
| impl | address | The address of the new market's implementation contract |
| quoteToken | address | The address of the new market's quote token |
| baseToken | address | The address of the new market's base token |
| quoteUnit | uint256 | The amount that one raw amount represent in quote token |

### defaultProxyAdmin

```solidity
function defaultProxyAdmin() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of market proxies' admin |

### registry

```solidity
function registry() external view returns (address)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the MarketRegistry contract |

### marketDeployer

```solidity
function marketDeployer(enum CloberMarketRegistry.MarketType marketType) external view returns (address)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketType | enum CloberMarketRegistry.MarketType | The enum value of market type |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the MarketDeployer contract |

### createDefaultMarket

```solidity
function createDefaultMarket(address quoteToken, address baseToken, uint88 quoteUnit, int24 makeFee, int24 takeFee) external returns (address)
```

Create new market with DefaultPriceBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of new market's quote token |
| baseToken | address | The address of new market's base token |
| quoteUnit | uint88 | The amount that one raw amount represent in quote token |
| makeFee | int24 | The percentage of maker fee in OrderBook._FEE_PRECISION |
| takeFee | int24 | The percentage of taker fee in OrderBook._FEE_PRECISION |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market |

### createStableMarket

```solidity
function createStableMarket(address quoteToken, address baseToken, uint88 quoteUnit, int24 makeFee, int24 takeFee) external returns (address)
```

Create new market with StablePriceBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteToken | address | The address of new market's quote token |
| baseToken | address | The address of new market's base token |
| quoteUnit | uint88 | The amount that one raw amount represent in quote token |
| makeFee | int24 | The percentage of maker fee in OrderBook._FEE_PRECISION |
| takeFee | int24 | The percentage of taker fee in OrderBook._FEE_PRECISION |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the created market |

### changeDefaultProxyAdmin

```solidity
function changeDefaultProxyAdmin(address newAdmin) external
```

Change defaultProxyAdmin

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newAdmin | address | The proxy admin address of new market in future |

### changeMarketDeployer

```solidity
function changeMarketDeployer(enum CloberMarketRegistry.MarketType marketType, address deployer) external
```

Change marketDeployer

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketType | enum CloberMarketRegistry.MarketType | The enum value of market type |
| deployer | address | The address of new MarketDeployer |

