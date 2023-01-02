## CloberRouter

### LimitOrderParams

```solidity
struct LimitOrderParams {
  address market;
  uint64 deadline;
  uint32 claimBounty;
  address user;
  uint16 priceIndex;
  uint64 rawAmount;
  bool postOnly;
  bool useNative;
  uint256 baseAmount;
}
```

### limitBid

```solidity
function limitBid(struct CloberRouter.LimitOrderParams params) external payable
```

Make limit order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.LimitOrderParams | The limit order parameters |

### limitAsk

```solidity
function limitAsk(struct CloberRouter.LimitOrderParams params) external payable
```

Make limit order in ask side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.LimitOrderParams | The limit order parameters |

### MarketOrderParams

```solidity
struct MarketOrderParams {
  address market;
  uint64 deadline;
  address user;
  uint16 limitPriceIndex;
  uint64 rawAmount;
  bool expendInput;
  bool useNative;
  uint256 baseAmount;
}
```

### marketBid

```solidity
function marketBid(struct CloberRouter.MarketOrderParams params) external payable
```

Make market order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.MarketOrderParams | The market order parameters |

### marketAsk

```solidity
function marketAsk(struct CloberRouter.MarketOrderParams params) external payable
```

Make market order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.MarketOrderParams | The market order parameters |

### MarketOrderKeys

```solidity
struct MarketOrderKeys {
  address market;
  struct CloberOrderBook.OrderKey[] orderKeys;
}
```

### claim

```solidity
function claim(uint64 deadline, struct CloberRouter.MarketOrderKeys[] keysList) external
```

Claim orders across markets

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| deadline | uint64 | The TTL of transaction in block timestamp |
| keysList | struct CloberRouter.MarketOrderKeys[] | The list of MarketOrderKeys |

### cancel

```solidity
function cancel(uint64 deadline, struct CloberRouter.MarketOrderKeys[] keysList) external
```

Cancel orders across markets

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| deadline | uint64 | The TTL of transaction in block timestamp |
| keysList | struct CloberRouter.MarketOrderKeys[] | The list of MarketOrderKeys |

