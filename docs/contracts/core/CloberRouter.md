# CloberRouter

## CloberRouter

### LimitOrderParams

```solidity
struct LimitOrderParams {
  address market;
  uint96 deadline;
  address user;
  uint32 rawAmount;
  uint16 priceIndex;
  bool postOnly;
  uint160 claimBounty;
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
  uint96 deadline;
  address user;
  uint16 limitPriceIndex;
  uint32 rawAmount;
  bool expendInput;
  uint256 baseAmount;
}
```

### marketBid

```solidity
function marketBid(struct CloberRouter.MarketOrderParams params) external
```

Make market order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.MarketOrderParams | The market order parameters |

### marketAsk

```solidity
function marketAsk(struct CloberRouter.MarketOrderParams params) external
```

Make market order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.MarketOrderParams | The market order parameters |

