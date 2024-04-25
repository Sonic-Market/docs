## Currency

## CurrencyLibrary

_This library allows for transferring and holding native tokens and ERC20 tokens_

### NativeTransferFailed

```solidity
error NativeTransferFailed()
```

Thrown when a native transfer fails

### ERC20TransferFailed

```solidity
error ERC20TransferFailed()
```

Thrown when an ERC20 transfer fails

### NATIVE

```solidity
Currency NATIVE
```

### transfer

```solidity
function transfer(Currency currency, address to, uint256 amount) internal
```

### balanceOfSelf

```solidity
function balanceOfSelf(Currency currency) internal view returns (uint256)
```

### equals

```solidity
function equals(Currency currency, Currency other) internal pure returns (bool)
```

### isNative

```solidity
function isNative(Currency currency) internal pure returns (bool)
```

### toId

```solidity
function toId(Currency currency) internal pure returns (uint256)
```

### fromId

```solidity
function fromId(uint256 id) internal pure returns (Currency)
```

