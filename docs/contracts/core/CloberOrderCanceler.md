## CloberOrderCanceler

### CancelParams

```solidity
struct CancelParams {
  address market;
  uint256[] tokenIds;
}
```

### cancel

```solidity
function cancel(struct CloberOrderCanceler.CancelParams[] paramsList) external
```

Cancel orders across markets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| paramsList | struct CloberOrderCanceler.CancelParams[] | The list of CancelParams. |

### cancelTo

```solidity
function cancelTo(struct CloberOrderCanceler.CancelParams[] paramsList, address to) external
```

Cancel orders across markets.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| paramsList | struct CloberOrderCanceler.CancelParams[] | The list of CancelParams. |
| to | address | The address to receive the canceled assets. |

