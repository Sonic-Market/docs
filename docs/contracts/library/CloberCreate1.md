## CloberCreate1

Utility functions regarding the vanilla `CREATE` operation.

### computeAddress

```solidity
function computeAddress(address origin, uint64 nonce) external pure returns (address)
```

Computes the address of the contract with the origin address and nonce value.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| origin | address | The origin address from which the contract address is derived. |
| nonce | uint64 | The nonce value to use in the contract address computation. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The computed contract address. |

