## CloberOptionToken

This interface defines the functions and events for an option token on the Clober protocol.

### Write

```solidity
event Write(address writer, uint256 amount)
```

_Emitted when an option writer options._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| writer | address | The address of the option writer. |
| amount | uint256 | The amount of options written. |

### Cancel

```solidity
event Cancel(address writer, uint256 amount)
```

_Emitted when an option writer cancels options before expiration._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| writer | address | The address of the option writer. |
| amount | uint256 | The amount of options cancelled. |

### Exercise

```solidity
event Exercise(address recipient, uint256 amount)
```

_Emitted when an option holder exercises options before expiration._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the option recipient. |
| amount | uint256 | The amount of options exercised. |

### Claim

```solidity
event Claim(address recipient, uint256 amount)
```

_Emitted when an option holder claims the underlying asset after exercise._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the option recipient. |
| amount | uint256 | The amount of underlying asset claimed. |

### CollectFee

```solidity
event CollectFee(address recipient, uint256 amount)
```

_Emitted when the exercise fee is collected from the option holder._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the fee recipient. |
| amount | uint256 | The amount of fee collected. |

### underlyingToken

```solidity
function underlyingToken() external view returns (address)
```

Returns the address of the underlying asset for the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the underlying asset. |

### quoteToken

```solidity
function quoteToken() external view returns (address)
```

Returns the address of the quote asset for the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the quote asset. |

### collateral

```solidity
function collateral(address user) external view returns (uint256)
```

Returns the collateral balance for the given address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address to check the balance for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The collateral balance for the given address. |

### strikePrice

```solidity
function strikePrice() external view returns (uint256)
```

Returns the strike price of the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The strike price of the option. |

### exercisedAmount

```solidity
function exercisedAmount() external view returns (uint256)
```

Returns the amount of options that have been exercised.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of options that have been exercised. |

### expiresAt

```solidity
function expiresAt() external view returns (uint256)
```

Returns the expiration timestamp for the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The expiration timestamp for the option. |

### exerciseFee

```solidity
function exerciseFee() external view returns (uint256)
```

Returns the exercise fee percentage for the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The exercise fee percentage for the option. |

### exerciseFeeBalance

```solidity
function exerciseFeeBalance() external view returns (uint256)
```

Returns the exercise fee balance for the option.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The exercise fee balance for the option. |

### write

```solidity
function write(uint256 amount) external
```

Allows an address to write options.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of options to write. |

### cancel

```solidity
function cancel(uint256 amount) external
```

Allows an option writer to cancel options before expiration.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of options to cancel. |

### exercise

```solidity
function exercise(uint256 amount) external
```

Allows an option holder to exercise options before expiration.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of options to exercise. |

### claim

```solidity
function claim() external
```

Allows an option holder to claim the underlying asset after exercise.

