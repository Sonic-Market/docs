## DirtyUint64

### DirtyUint64Error

```solidity
error DirtyUint64Error(uint256 errorCode)
```

### toDirtyUnsafe

```solidity
function toDirtyUnsafe(uint64 cleanUint) internal pure returns (uint64 dirtyUint)
```

### toDirty

```solidity
function toDirty(uint64 cleanUint) internal pure returns (uint64 dirtyUint)
```

### toClean

```solidity
function toClean(uint64 dirtyUint) internal pure returns (uint64 cleanUint)
```

### addClean

```solidity
function addClean(uint64 current, uint64 cleanUint) internal pure returns (uint64)
```

### addDirty

```solidity
function addDirty(uint64 current, uint64 dirtyUint) internal pure returns (uint64)
```

### subClean

```solidity
function subClean(uint64 current, uint64 cleanUint) internal pure returns (uint64 ret)
```

### subDirty

```solidity
function subDirty(uint64 current, uint64 dirtyUint) internal pure returns (uint64 ret)
```

### sumPackedUnsafe

```solidity
function sumPackedUnsafe(uint256 packed, uint256 from, uint256 to) internal pure returns (uint64 ret)
```

