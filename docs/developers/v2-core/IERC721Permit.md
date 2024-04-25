## IERC721Permit

An interface for the ERC721 permit extension

### InvalidSignature

```solidity
error InvalidSignature()
```

### PermitExpired

```solidity
error PermitExpired()
```

### PERMIT_TYPEHASH

```solidity
function PERMIT_TYPEHASH() external pure returns (bytes32)
```

The EIP-712 typehash for the permit struct used by the contract

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

The EIP-712 domain separator for this contract

### permit

```solidity
function permit(address spender, uint256 tokenId, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external
```

Approve the spender to transfer the given tokenId

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| spender | address | The address to approve |
| tokenId | uint256 | The tokenId to approve |
| deadline | uint256 | The deadline for the signature |
| v | uint8 | The recovery id of the signature |
| r | bytes32 | The r value of the signature |
| s | bytes32 | The s value of the signature |

### nonces

```solidity
function nonces(uint256 tokenId) external view returns (uint256)
```

Get the current nonce for a token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | The tokenId to get the nonce for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current nonce |

