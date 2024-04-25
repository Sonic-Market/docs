## Lockers

_This library manages a custom storage implementation for a queue
     that tracks current lockers. The "sentinel" storage slot for this data structure,
     always passed in as IPoolManager.LockData storage self, stores not just the current
     length of the queue but also the global count of non-zero deltas across all lockers.
     The values of the data structure start at OFFSET, and each value is a locker address._

### LOCK_DATA_SLOT

```solidity
uint256 LOCK_DATA_SLOT
```

struct LockData {
    /// @notice The current number of active lockers
    uint128 length;
    /// @notice The total number of nonzero deltas over all active + completed lockers
    uint128 nonzeroDeltaCount;
}

### LOCKERS_SLOT

```solidity
uint256 LOCKERS_SLOT
```

### LOCKER_STRUCT_SIZE

```solidity
uint256 LOCKER_STRUCT_SIZE
```

### HOOK_ADDRESS_SLOT

```solidity
uint256 HOOK_ADDRESS_SLOT
```

### NONZERO_DELTA_COUNT_OFFSET

```solidity
uint256 NONZERO_DELTA_COUNT_OFFSET
```

### LENGTH_MASK

```solidity
uint256 LENGTH_MASK
```

### push

```solidity
function push(address locker, address lockCaller) internal
```

_Pushes a locker onto the end of the queue, and updates the sentinel storage slot._

### lockData

```solidity
function lockData() internal view returns (uint128 l, uint128 nonzeroDeltaCount)
```

### length

```solidity
function length() internal view returns (uint128 l)
```

### pop

```solidity
function pop() internal
```

_Pops a locker off the end of the queue. Note that no storage gets cleared._

### getLocker

```solidity
function getLocker(uint256 i) internal view returns (address locker)
```

### getLockCaller

```solidity
function getLockCaller(uint256 i) internal view returns (address locker)
```

### getCurrentLocker

```solidity
function getCurrentLocker() internal view returns (address)
```

### getCurrentLockCaller

```solidity
function getCurrentLockCaller() internal view returns (address)
```

### incrementNonzeroDeltaCount

```solidity
function incrementNonzeroDeltaCount() internal
```

### decrementNonzeroDeltaCount

```solidity
function decrementNonzeroDeltaCount() internal
```

### getCurrentHook

```solidity
function getCurrentHook() internal view returns (contract IHooks currentHook)
```

### getHook

```solidity
function getHook(uint256 i) internal view returns (address hook)
```

### setCurrentHook

```solidity
function setCurrentHook(contract IHooks currentHook) internal returns (bool set)
```

### clearCurrentHook

```solidity
function clearCurrentHook() internal
```

