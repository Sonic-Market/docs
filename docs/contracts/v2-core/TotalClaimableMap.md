## TotalClaimableMap

### add

```solidity
function add(mapping(uint24 => uint256) self, Tick tick, uint64 n) internal
```

### sub

```solidity
function sub(mapping(uint24 => uint256) self, Tick tick, uint64 n) internal
```

### get

```solidity
function get(mapping(uint24 => uint256) self, Tick tick) internal view returns (uint64)
```

### _splitTick

```solidity
function _splitTick(Tick tick) internal pure returns (uint24 groupIndex, uint8 elementIndex)
```

