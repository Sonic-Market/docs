## CloberMarketViewer

### GetClaimableRawAmountParams

```solidity
struct GetClaimableRawAmountParams {
  address market;
  address user;
  uint32 id;
}
```

### getClaimableRawAmounts

```solidity
function getClaimableRawAmounts(struct CloberMarketViewer.GetClaimableRawAmountParams[] params) external view returns (uint32[])
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| params | struct CloberMarketViewer.GetClaimableRawAmountParams[] | The list of GetClaimableRawAmountParams struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32[] | The list of the claimable amount in raw amount unit |

### getClaimableRawAmount

```solidity
function getClaimableRawAmount(struct CloberMarketViewer.GetClaimableRawAmountParams param) external view returns (uint32)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| param | struct CloberMarketViewer.GetClaimableRawAmountParams | The GetClaimableRawAmountParams struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The claimable amount in raw amount unit |

### currentBidPrice

```solidity
function currentBidPrice(address marketAddress) external view returns (uint128)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of target market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint128 | The highest bid price in _PRICE_PRECISION, returns 0 when there is no bid order |

### currentAskPrice

```solidity
function currentAskPrice(address marketAddress) external view returns (uint128)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of target market |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint128 | The lowest ask price in _PRICE_PRECISION, returns 0 when there is no ask order |

