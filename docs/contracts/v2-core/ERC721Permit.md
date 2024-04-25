## ERC721Permit

### PERMIT_TYPEHASH

```solidity
bytes32 PERMIT_TYPEHASH
```

The EIP-712 typehash for the permit struct used by the contract

### constructor

```solidity
constructor(string name_, string symbol_, string version_) public
```

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

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() public view returns (bytes32)
```

The EIP-712 domain separator for this contract

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### nonces

```solidity
function nonces(uint256 id) external view returns (uint256)
```

### _getAndIncrementNonce

```solidity
function _getAndIncrementNonce(uint256 tokenId) internal returns (uint256 nonce)
```

### _ownerOf

```solidity
function _ownerOf(uint256 tokenId) internal view returns (address)
```

_Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist

IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the
core ERC721 logic MUST be matched with the use of {_increaseBalance} to keep balances
consistent with ownership. The invariant to preserve is that for any address `a` the value returned by
`balanceOf(a)` must be equal to the number of tokens such that `_ownerOf(tokenId)` is `a`._

### _setOwner

```solidity
function _setOwner(uint256 tokenId, address owner) internal
```

_Override this function to set owner_

