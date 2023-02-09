## CloberOrderBook

### MakeOrder

```solidity
event MakeOrder(address sender, address user, uint64 rawAmount, uint32 claimBounty, uint256 orderIndex, uint16 priceIndex, uint8 options)
```

Emitted by the market when an order is created

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address who sent the tokens to make the order |
| user | address | The address with the rights to claim the proceeds of the order when taken |
| rawAmount | uint64 | The ordered raw amount |
| claimBounty | uint32 |  |
| orderIndex | uint256 | The index of queue's order list |
| priceIndex | uint16 | The index of the price on the price book |
| options | uint8 | LSB: 0 - Ask, 1 - Bid |

### TakeOrder

```solidity
event TakeOrder(address sender, address user, uint16 priceIndex, uint64 rawAmount, uint8 options)
```

Emitted by the market when an order takes liquidity from the order book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address who sent the tokens to take the order |
| user | address | The recipient address of the traded token |
| priceIndex | uint16 | The index of the price on the price book |
| rawAmount | uint64 | The ordered raw amount |
| options | uint8 | MSB: 0 - Limit, 1 - Market / LSB: 0 - Ask, 1 - Bid |

### CancelOrder

```solidity
event CancelOrder(address user, uint64 rawAmount, uint256 orderIndex, uint16 priceIndex, bool isBid)
```

Emitted by the market when an order is canceled

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The owner of the order |
| rawAmount | uint64 | The ordered raw amount |
| orderIndex | uint256 | The index of queue's order list |
| priceIndex | uint16 | The index of the price on the price book |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

### ClaimOrder

```solidity
event ClaimOrder(address claimer, address user, uint64 rawAmount, uint256 bountyAmount, uint256 orderIndex, uint16 priceIndex, bool isBase)
```

Emitted by the market when the maker's taken order is claimed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimer | address | The address who has claimed |
| user | address | The owner of the order |
| rawAmount | uint64 | The ordered raw amount |
| bountyAmount | uint256 | The exact token amount of the claim bounty |
| orderIndex | uint256 | The index of queue's order list |
| priceIndex | uint16 | The index of the price on the price book |
| isBase | bool | The flag indicating whether the user receives the base token or the quote token |

### Flash

```solidity
event Flash(address caller, address borrower, uint256 quoteAmount, uint256 baseAmount, uint256 earnedQuote, uint256 earnedBase)
```

Emitted by the market when someone flash-loaned the tokens

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| caller | address | The caller address of flash-loan |
| borrower | address | The address of the flash loaned token receiver |
| quoteAmount | uint256 | The loaned amount of the quote token |
| baseAmount | uint256 | The loaned amount of the base token |
| earnedQuote | uint256 | The amount of the quote token protocol earned |
| earnedBase | uint256 | The amount of the base token protocol earned |

### Order

```solidity
struct Order {
  uint64 openAmount;
  uint32 claimBounty;
  address owner;
}
```

### limitOrder

```solidity
function limitOrder(address user, uint16 priceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options, bytes data) external payable returns (uint256)
```

Take all the liquidity better or equal to the given priceIndex with the given tokens
and add liquidity to make an order with the remaining tokens.

_`msg.value` will be used for claimBounty, the fee amount in native token that claimer will take in future_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker/maker address |
| priceIndex | uint16 | The index of the price on the price book |
| rawAmount | uint64 | The raw quote amount to trade, utilized at bid |
| baseAmount | uint256 | The base token amount to trade, utilized at ask |
| options | uint8 | The value contains all options in bit scale. `isBid` option for the right 1st bit, `postOnly` option for right 2nd bit. |
| data | bytes | Custom callback data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order index. If an order is not made `type(uint256).max` is returned instead. |

### getExpectedAmount

```solidity
function getExpectedAmount(uint16 limitPriceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options) external view returns (uint256, uint256)
```

Returns the expected input amount, output amount for given param.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| limitPriceIndex | uint16 | The price index to take until |
| rawAmount | uint64 | The raw amount to trade. This value utilizes as maxRequiredAmount at bid or minReceivedAmount at ask. |
| baseAmount | uint256 | The base token amount to trade. This value utilizes as maxRequiredAmount at ask or minReceivedAmount at bid |
| options | uint8 | The value contains all options in bit scale. `isBid` option for the right 1st bit, `expendInput` option for right 2nd bit. |

### marketOrder

```solidity
function marketOrder(address user, uint16 limitPriceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options, bytes data) external
```

Take all the liquidity with the given tokens until the given priceIndex

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker address |
| limitPriceIndex | uint16 | The price index to take until |
| rawAmount | uint64 | The raw amount to trade. This value utilizes as maxRequiredAmount at bid or minReceivedAmount at ask. |
| baseAmount | uint256 | The base token amount to trade. This value utilizes as maxRequiredAmount at ask or minReceivedAmount at bid |
| options | uint8 | The value contains all options in bit scale. `isBid` option for the right 1st bit, `expendInput` option for right 2nd bit. |
| data | bytes | Custom callback data |

### cancel

```solidity
function cancel(address receiver, struct OrderKey[] orderKeys) external
```

Cancel orders by claimIds

_The length of orderKeys must be controlled by the caller to avoid block gas limit exceeds_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiver | address | The address to receive canceled tokens |
| orderKeys | struct OrderKey[] | The order keys of the orders to cancel |

### claim

```solidity
function claim(address claimer, struct OrderKey[] orderKeys) external
```

Claim the taken orders

_The length of orderKeys must be controlled by the caller to avoid block gas limit exceeds_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimer | address | The address to receive claim bounty |
| orderKeys | struct OrderKey[] | The order keys of the orders to claim |

### flash

```solidity
function flash(address borrower, uint256 quoteAmount, uint256 baseAmount, bytes data) external
```

Flash loan the tokens in OrderBook

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| borrower | address | The address to receive loaned tokens |
| quoteAmount | uint256 | The quote token amount to borrow |
| baseAmount | uint256 | The base token amount to borrow |
| data | bytes | The user's custom callback data |

### quoteUnit

```solidity
function quoteUnit() external view returns (uint256)
```

Returns the quote unit amount

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount that one raw amount represent in quote tokens |

### makerFee

```solidity
function makerFee() external view returns (int24)
```

Returns the make fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int24 | The percentage of maker fee in _FEE_PRECISION |

### takerFee

```solidity
function takerFee() external view returns (uint24)
```

Returns the take fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | The percentage of taker fee in _FEE_PRECISION |

### orderToken

```solidity
function orderToken() external view returns (address)
```

Returns the address of the order NFT contract

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the order NFT contract |

### quoteToken

```solidity
function quoteToken() external view returns (address)
```

Returns the address of the quote token

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the quote token |

### baseToken

```solidity
function baseToken() external view returns (address)
```

Returns the address of the base token

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the base token |

### getDepth

```solidity
function getDepth(bool isBid, uint16 priceIndex) external view returns (uint64)
```

Returns the current total ordered amount at the given price

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The left order amount in the price queue |

### getFeeBalance

```solidity
function getFeeBalance() external view returns (uint128 quote, uint128 base)
```

Returns the fee balance that has not been collected yet

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| quote | uint128 | The current fee balance for the quote token |
| base | uint128 | The current fee balance for the base token |

### hostReadyToBeDelivered

```solidity
function hostReadyToBeDelivered(address token) external view returns (uint256)
```

Returns the amount of token that can be delivered to the host address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to be delivered. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of token that can be delivered to the host address. |

### daoReadyToBeDelivered

```solidity
function daoReadyToBeDelivered(address token) external view returns (uint256)
```

Returns the amount of token that can be delivered to the dao treasury address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to be delivered. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of token that can be delivered to the dao treasury address. |

### isEmpty

```solidity
function isEmpty(bool isBid) external view returns (bool)
```

Returns whether the order book is empty or not

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | The boolean flag if the order book is empty |

### getOrder

```solidity
function getOrder(struct OrderKey orderKey) external view returns (struct CloberOrderBook.Order)
```

Returns the order information

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key of the order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberOrderBook.Order | The order struct of the given order key |

### bestPriceIndex

```solidity
function bestPriceIndex(bool isBid) external view returns (uint16)
```

Returns the lowest ask price index or the highest bid price index

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | The current price index. If the order book is empty, it will revert; |

### collectFees

```solidity
function collectFees(address token, address destination) external
```

Collect protocol fees

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The token address to collect. It should be the quote token or the base token. |
| destination | address | The destination address to transfer fees. It should be the dao treasury address or the host address. |

### changeOrderOwner

```solidity
function changeOrderOwner(struct OrderKey orderKey, address newOwner) external
```

Change the owner of the order

_Only the token contract can call this function_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key of the order |
| newOwner | address | The new owner address of the order |

