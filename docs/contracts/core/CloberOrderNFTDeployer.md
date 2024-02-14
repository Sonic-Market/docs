## CloberOrderNFTDeployer

### deploy

```solidity
function deploy(bytes32 salt) external returns (address)
```

Deploys the OrderNFT contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| salt | bytes32 | The salt to compute the OrderNFT contract address via CREATE2. |

### computeTokenAddress

```solidity
function computeTokenAddress(bytes32 salt) external view returns (address)
```

Computes the OrderNFT contract address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| salt | bytes32 | The salt to compute the OrderNFT contract address via CREATE2. |

