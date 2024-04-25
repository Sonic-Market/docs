## Tick

## TickLibrary

### InvalidTick

```solidity
error InvalidTick()
```

### InvalidPrice

```solidity
error InvalidPrice()
```

### TickOverflow

```solidity
error TickOverflow()
```

### MAX_TICK

```solidity
int24 MAX_TICK
```

### MIN_TICK

```solidity
int24 MIN_TICK
```

### MIN_PRICE

```solidity
uint256 MIN_PRICE
```

### MAX_PRICE

```solidity
uint256 MAX_PRICE
```

### validateTick

```solidity
function validateTick(Tick tick) internal pure
```

### validatePrice

```solidity
modifier validatePrice(uint256 price)
```

### fromPrice

```solidity
function fromPrice(uint256 price) internal pure returns (Tick)
```

### toPrice

```solidity
function toPrice(Tick tick) internal pure returns (uint256 price)
```

### gt

```solidity
function gt(Tick a, Tick b) internal pure returns (bool)
```

### baseToQuote

```solidity
function baseToQuote(Tick tick, uint256 base, bool roundingUp) internal pure returns (uint256)
```

### quoteToBase

```solidity
function quoteToBase(Tick tick, uint256 quote, bool roundingUp) internal pure returns (uint256)
```

