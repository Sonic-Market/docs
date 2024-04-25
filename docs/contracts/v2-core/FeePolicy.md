## FeePolicy

## FeePolicyLibrary

### RATE_PRECISION

```solidity
uint256 RATE_PRECISION
```

### MAX_FEE_RATE

```solidity
int256 MAX_FEE_RATE
```

### MIN_FEE_RATE

```solidity
int256 MIN_FEE_RATE
```

### RATE_MASK

```solidity
uint256 RATE_MASK
```

### InvalidFeePolicy

```solidity
error InvalidFeePolicy()
```

### encode

```solidity
function encode(bool usesQuote_, int24 rate_) internal pure returns (FeePolicy feePolicy)
```

### isValid

```solidity
function isValid(FeePolicy self) internal pure returns (bool)
```

### usesQuote

```solidity
function usesQuote(FeePolicy self) internal pure returns (bool f)
```

### rate

```solidity
function rate(FeePolicy self) internal pure returns (int24 r)
```

### calculateFee

```solidity
function calculateFee(FeePolicy self, uint256 amount, bool reverseRounding) internal pure returns (int256 fee)
```

### calculateOriginalAmount

```solidity
function calculateOriginalAmount(FeePolicy self, uint256 amount, bool reverseFee) internal pure returns (uint256 originalAmount)
```

