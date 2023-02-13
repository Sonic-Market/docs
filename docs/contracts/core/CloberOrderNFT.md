## CloberOrderNFT

### baseURI

```solidity
function baseURI() external view returns (string)
```

Returns the base URI for the metadata of this NFT collection.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The base URI for the metadata of this NFT collection. |

### market

```solidity
function market() external view returns (address)
```

Returns the address of the market contract that manages this token.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market contract that manages this token. |

### owner

```solidity
function owner() external view returns (address)
```

Returns the address of contract owner.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the contract owner. |

### onMint

```solidity
function onMint(address to, uint256 tokenId) external
```

Called when a new token is minted.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | The receiver address of the minted token. |
| tokenId | uint256 | The id of the token minted. |

### onBurn

```solidity
function onBurn(uint256 tokenId) external
```

Called when a token is burned.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | The id of the token burned. |

### changeBaseURI

```solidity
function changeBaseURI(string newBaseURI) external
```

Changes the base URI for the metadata of this NFT collection.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newBaseURI | string | The new base URI for the metadata of this NFT collection. |

### decodeId

```solidity
function decodeId(uint256 id) external pure returns (struct OrderKey)
```

Decodes a token id into an order key.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The id to decode. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct OrderKey | The order key corresponding to the given id. |

### encodeId

```solidity
function encodeId(struct OrderKey orderKey) external pure returns (uint256)
```

Encodes an order key to a token id.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key to encode. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The id corresponding to the given order key. |

### cancel

```solidity
function cancel(address from, uint256[] tokenIds, address receiver) external
```

Cancels orders with token ids.

_Only the OrderCanceler can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The address of the owner of the tokens. |
| tokenIds | uint256[] | The ids of the tokens to cancel. |
| receiver | address | The address to send the underlying assets to. |

