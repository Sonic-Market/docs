## SignificantBit

### DEBRUIJN_SEQ

```solidity
uint256 DEBRUIJN_SEQ
```

### DEBRUIJN_INDEX

```solidity
bytes DEBRUIJN_INDEX
```

### leastSignificantBit

```solidity
function leastSignificantBit(uint256 x) internal pure returns (uint8)
```

Finds the index of the least significant bit.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x | uint256 | The value to compute the least significant bit for. Must be a non-zero value. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | ret The index of the least significant bit. |

### mostSignificantBit

```solidity
function mostSignificantBit(uint256 x) internal pure returns (uint8)
```

