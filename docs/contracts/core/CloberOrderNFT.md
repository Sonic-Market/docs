## CloberOrderNFT

### baseURI

```solidity
function baseURI() external view returns (string)
```

### market

```solidity
function market() external view returns (address)
```

### mint

```solidity
function mint(address to, bool isBid, uint16 priceIndex, uint256 orderIndex) external
```

### burn

```solidity
function burn(bool isBid, uint16 priceIndex, uint256 orderIndex) external
```

### changeName

```solidity
function changeName(string _name) external
```

### changeSymbol

```solidity
function changeSymbol(string _symbol) external
```

### changeBaseURI

```solidity
function changeBaseURI(string _baseURI) external
```

### decodeId

```solidity
function decodeId(uint256 id) external pure returns (struct CloberOrderBook.OrderKey)
```

### encodeId

```solidity
function encodeId(struct CloberOrderBook.OrderKey orderKey) external pure returns (uint256 id)
```

