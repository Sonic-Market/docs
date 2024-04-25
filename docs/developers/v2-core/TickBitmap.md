## TickBitmap

### EmptyError

```solidity
error EmptyError()
```

### AlreadyExistsError

```solidity
error AlreadyExistsError()
```

### B0_BITMAP_KEY

```solidity
uint256 B0_BITMAP_KEY
```

### MAX_UINT_256_MINUS_1

```solidity
uint256 MAX_UINT_256_MINUS_1
```

### has

```solidity
function has(mapping(uint256 => uint256) self, Tick tick) internal view returns (bool)
```

### isEmpty

```solidity
function isEmpty(mapping(uint256 => uint256) self) internal view returns (bool)
```

### highest

```solidity
function highest(mapping(uint256 => uint256) self) internal view returns (Tick)
```

### set

```solidity
function set(mapping(uint256 => uint256) self, Tick tick) internal
```

### clear

```solidity
function clear(mapping(uint256 => uint256) self, Tick tick) internal
```

### maxLessThan

```solidity
function maxLessThan(mapping(uint256 => uint256) self, Tick tick) internal view returns (Tick)
```

