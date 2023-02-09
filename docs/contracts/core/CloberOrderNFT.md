## CloberOrderNFT

### baseURI

```solidity
function baseURI() external view returns (string)
```

Returns the base URI for the metadata of this token.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The base URI for the metadata of this token. |

### market

```solidity
function market() external view returns (address)
```

Returns the address of the market contract that manages this token.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market contract that manages this token. |

### onMint

```solidity
function onMint(address to, uint256 tokenId) external
```

Called when a new token is minted.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | The receiver address of the minted token. |
| tokenId | uint256 | The Id of the token to mint. |

### onBurn

```solidity
function onBurn(uint256 tokenId) external
```

Called when a token is burned.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | The Id of the token to burn. |

### changeBaseURI

```solidity
function changeBaseURI(string _baseURI) external
```

Changes the base URI for the metadata of this token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _baseURI | string | The new base URI for the metadata of this token. |

### decodeId

```solidity
function decodeId(uint256 id) external pure returns (struct OrderKey)
```

Decodes an Id for this token into an order key.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The Id to decode. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct OrderKey | The order key corresponding to the given Id. |

### encodeId

```solidity
function encodeId(struct OrderKey orderKey) external pure returns (uint256)
```

Encodes an order key as an Id for this token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key to encode. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The Id corresponding to the given order key. |

### cancel

```solidity
function cancel(address from, uint256[] tokenIds, address receiver) external
```

Cancels the order of a token.

_Only OrderCanceler can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The address of the owner of the token. |
| tokenIds | uint256[] | The Ids of the tokens to cancel. |
| receiver | address | The address to send the tokens to after they are canceled. |

