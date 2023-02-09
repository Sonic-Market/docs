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
function limitBid(struct CloberRouter.LimitOrderParams params) external payable returns (uint256)
```

Make limit order in bid side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.LimitOrderParams | The limit order parameters |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order Id of the submitted limit bid order. |

### limitAsk

```solidity
function limitAsk(struct CloberRouter.LimitOrderParams params) external payable returns (uint256)
```

Make limit order in ask side

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberRouter.LimitOrderParams | The limit order parameters |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order Id of the submitted limit ask order. |

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

### ClaimOrderParams

```solidity
struct ClaimOrderParams {
  address market;
  struct OrderKey[] orderKeys;
}
```

### claim

```solidity
function claim(uint64 deadline, struct CloberRouter.ClaimOrderParams[] paramsList) external
```

Claim orders across markets

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| deadline | uint64 | The TTL of transaction in block timestamp |
| paramsList | struct CloberRouter.ClaimOrderParams[] | The list of ClaimOrderParams |

### limitBidAfterClaim

```solidity
function limitBidAfterClaim(struct CloberRouter.ClaimOrderParams[] claimParamsList, struct CloberRouter.LimitOrderParams limitOrderParams) external payable returns (uint256)
```

Submits a limit bid order to the order book after claiming a list of orders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimParamsList | struct CloberRouter.ClaimOrderParams[] | Array of ClaimOrderParams: The list of orders to be claimed. |
| limitOrderParams | struct CloberRouter.LimitOrderParams | LimitOrderParams: The parameters for the limit order. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order Id of the submitted limit bid order. |

### limitAskAfterClaim

```solidity
function limitAskAfterClaim(struct CloberRouter.ClaimOrderParams[] claimParamsList, struct CloberRouter.LimitOrderParams limitOrderParams) external payable returns (uint256)
```

Submits a limit ask order to the order book after claiming a list of orders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimParamsList | struct CloberRouter.ClaimOrderParams[] | Array of ClaimOrderParams: The list of orders to be claimed. |
| limitOrderParams | struct CloberRouter.LimitOrderParams | LimitOrderParams: The parameters for the limit order. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order Id of the submitted limit ask order. |

### marketBidAfterClaim

```solidity
function marketBidAfterClaim(struct CloberRouter.ClaimOrderParams[] claimParamsList, struct CloberRouter.MarketOrderParams marketOrderParams) external payable
```

Submits a market bid order to the order book after claiming a list of orders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimParamsList | struct CloberRouter.ClaimOrderParams[] | Array of ClaimOrderParams: The list of orders to be claimed. |
| marketOrderParams | struct CloberRouter.MarketOrderParams | MarketOrderParams: The parameters for the market order. |

### marketAskAfterClaim

```solidity
function marketAskAfterClaim(struct CloberRouter.ClaimOrderParams[] claimParamsList, struct CloberRouter.MarketOrderParams marketOrderParams) external payable
```

Submits a market ask order to the order book after claiming a list of orders.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimParamsList | struct CloberRouter.ClaimOrderParams[] | Array of ClaimOrderParams: The list of orders to be claimed. |
| marketOrderParams | struct CloberRouter.MarketOrderParams | MarketOrderParams: The parameters for the market order. |

