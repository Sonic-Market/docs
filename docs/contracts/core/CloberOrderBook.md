## CloberOrderBook

### MakeOrder

```solidity
event MakeOrder(address sender, address user, uint64 rawAmount, uint32 claimBounty, uint256 orderIndex, uint16 priceIndex, uint8 options)
```

Emitted when an order is created.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address who sent the tokens to make the order. |
| user | address | The address with the rights to claim the proceeds of the order. |
| rawAmount | uint64 | The ordered raw amount. |
| claimBounty | uint32 |  |
| orderIndex | uint256 | The order index. |
| priceIndex | uint16 | The price book index. |
| options | uint8 | LSB: 0 - Ask, 1 - Bid. |

### TakeOrder

```solidity
event TakeOrder(address sender, address user, uint16 priceIndex, uint64 rawAmount, uint8 options)
```

Emitted when an order takes from the order book.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address who sent the tokens to take the order. |
| user | address | The recipient address of the traded token. |
| priceIndex | uint16 | The price book index. |
| rawAmount | uint64 | The ordered raw amount. |
| options | uint8 | MSB: 0 - Limit, 1 - Market / LSB: 0 - Ask, 1 - Bid. |

### CancelOrder

```solidity
event CancelOrder(address user, uint64 rawAmount, uint256 orderIndex, uint16 priceIndex, bool isBid)
```

Emitted when an order is canceled.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The owner of the order. |
| rawAmount | uint64 | The raw amount remaining that was canceled. |
| orderIndex | uint256 | The order index. |
| priceIndex | uint16 | The price book index. |
| isBid | bool | The flag indicating whether it's a bid order or an ask order. |

### ClaimOrder

```solidity
event ClaimOrder(address claimer, address user, uint64 rawAmount, uint256 bountyAmount, uint256 orderIndex, uint16 priceIndex, bool isBase)
```

Emitted when the proceeds of an order is claimed.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimer | address | The address that initiated the claim. |
| user | address | The owner of the order. |
| rawAmount | uint64 | The ordered raw amount. |
| bountyAmount | uint256 | The size of the claim bounty. |
| orderIndex | uint256 | The order index. |
| priceIndex | uint16 | The price book index. |
| isBase | bool | The flag indicating whether the user receives the base token or the quote token. |

### Flash

```solidity
event Flash(address caller, address borrower, uint256 quoteAmount, uint256 baseAmount, uint256 earnedQuote, uint256 earnedBase)
```

Emitted when a flash-loan is taken.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| caller | address | The caller address of the flash-loan. |
| borrower | address | The address of the flash loan token receiver. |
| quoteAmount | uint256 | The amount of quote tokens the user has borrowed. |
| baseAmount | uint256 | The amount of base tokens the user has borrowed. |
| earnedQuote | uint256 | The amount of quote tokens the protocol earned in quote tokens. |
| earnedBase | uint256 | The amount of base tokens the protocol earned in base tokens. |

### Order

```solidity
struct Order {
  uint64 amount;
  uint32 claimBounty;
  address owner;
}
```

### limitOrder

```solidity
function limitOrder(address user, uint16 priceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options, bytes data) external payable returns (uint256)
```

Take orders better or equal to the given priceIndex and make an order with the remaining tokens.

_`msg.value` will be used as the claimBounty._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker/maker address. |
| priceIndex | uint16 | The price book index. |
| rawAmount | uint64 | The raw quote amount to trade, utilized by bids. |
| baseAmount | uint256 | The base token amount to trade, utilized by asks. |
| options | uint8 | LSB: 0 - Ask, 1 - Bid. Second bit: 1 - Post only. |
| data | bytes | Custom callback data |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The order index. If an order is not made `type(uint256).max` is returned instead. |

### getExpectedAmount

```solidity
function getExpectedAmount(uint16 limitPriceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options) external view returns (uint256, uint256)
```

Returns the expected input amount and output amount.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| limitPriceIndex | uint16 | The price index to take until. |
| rawAmount | uint64 | The raw amount to trade. Bid & expendInput => Used as input amount. Bid & !expendInput => Not used. Ask & expendInput => Not used. Ask & !expendInput => Used as output amount. |
| baseAmount | uint256 | The base token amount to trade. Bid & expendInput => Not used. Bid & !expendInput => Used as output amount. Ask & expendInput => Used as input amount. Ask & !expendInput => Not used. |
| options | uint8 | LSB: 0 - Ask, 1 - Bid. Second bit: 1 - expend input. |

### marketOrder

```solidity
function marketOrder(address user, uint16 limitPriceIndex, uint64 rawAmount, uint256 baseAmount, uint8 options, bytes data) external
```

Take opens orders until certain conditions are met.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker address. |
| limitPriceIndex | uint16 | The price index to take until. |
| rawAmount | uint64 | The raw amount to trade. This value is used as the maximum input amount by bids and minimum output amount by asks. |
| baseAmount | uint256 | The base token amount to trade. This value is used as the maximum input amount by asks and minimum output amount by bids. |
| options | uint8 | LSB: 0 - Ask, 1 - Bid. Second bit: 1 - expend input. |
| data | bytes | Custom callback data. |

### cancel

```solidity
function cancel(address receiver, struct OrderKey[] orderKeys) external
```

Cancel orders.

_The length of orderKeys must be controlled by the caller to avoid block gas limit exceeds._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiver | address | The address to receive canceled tokens. |
| orderKeys | struct OrderKey[] | The order keys of the orders to cancel. |

### claim

```solidity
function claim(address claimer, struct OrderKey[] orderKeys) external
```

Claim the proceeds of orders.

_The length of orderKeys must be controlled by the caller to avoid block gas limit exceeds._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimer | address | The address to receive the claim bounties. |
| orderKeys | struct OrderKey[] | The order keys of the orders to claim. |

### flash

```solidity
function flash(address borrower, uint256 quoteAmount, uint256 baseAmount, bytes data) external
```

Flash loan the tokens in the OrderBook.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| borrower | address | The address to receive the loan. |
| quoteAmount | uint256 | The quote token amount to borrow. |
| baseAmount | uint256 | The base token amount to borrow. |
| data | bytes | The user's custom callback data. |

### quoteUnit

```solidity
function quoteUnit() external view returns (uint256)
```

Returns the quote unit amount.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount that one raw amount represent in quote tokens. |

### makerFee

```solidity
function makerFee() external view returns (int24)
```

Returns the maker fee.
Paid to the maker when negative, paid by the maker when positive.
Every 10000 represents a 1% fee on trade volume.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int24 | The maker fee. 100 = 1bp. |

### takerFee

```solidity
function takerFee() external view returns (uint24)
```

Returns the take fee
Paid by the taker.
Every 10000 represents a 1% fee on trade volume.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | The taker fee. 100 = 1bps. |

### orderToken

```solidity
function orderToken() external view returns (address)
```

Returns the address of the order NFT contract.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the order NFT contract. |

### quoteToken

```solidity
function quoteToken() external view returns (address)
```

Returns the address of the quote token.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the quote token. |

### baseToken

```solidity
function baseToken() external view returns (address)
```

Returns the address of the base token.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the base token. |

### getDepth

```solidity
function getDepth(bool isBid, uint16 priceIndex) external view returns (uint64)
```

Returns the current total open amount at the given price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag to choose which side to check the depth for. |
| priceIndex | uint16 | The price book index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The total open amount. |

### getFeeBalance

```solidity
function getFeeBalance() external view returns (uint128 quote, uint128 base)
```

Returns the fee balance that has not been collected yet.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| quote | uint128 | The current fee balance for the quote token. |
| base | uint128 | The current fee balance for the base token. |

### uncollectedHostFees

```solidity
function uncollectedHostFees(address token) external view returns (uint256)
```

Returns the amount of tokens that can be collected by the host.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to be collected. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of tokens that can be collected by the host. |

### uncollectedProtocolFees

```solidity
function uncollectedProtocolFees(address token) external view returns (uint256)
```

Returns the amount of tokens that can be collected by the dao treasury.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to be collected. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of tokens that can be collected by the dao treasury. |

### isEmpty

```solidity
function isEmpty(bool isBid) external view returns (bool)
```

Returns whether the order book is empty or not.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag to choose which side to check the emptiness of. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Whether the order book is empty or not on that side. |

### getOrder

```solidity
function getOrder(struct OrderKey orderKey) external view returns (struct CloberOrderBook.Order)
```

Returns the order information.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key of the order. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberOrderBook.Order | The order struct of the given order key. |

### bestPriceIndex

```solidity
function bestPriceIndex(bool isBid) external view returns (uint16)
```

Returns the lowest ask price index or the highest bid price index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | Returns the lowest ask price if false, highest bid price if true. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | The current price index. If the order book is empty, it will revert. |

### rawToBase

```solidity
function rawToBase(uint64 rawAmount, uint16 priceIndex, bool roundingUp) external view returns (uint256)
```

Converts a raw amount to its corresponding base amount using a given price index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rawAmount | uint64 | The raw amount to be converted. |
| priceIndex | uint16 | The index of the price to be used for the conversion. |
| roundingUp | bool | Specifies whether the result should be rounded up or down. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The converted base amount. |

### rawToQuote

```solidity
function rawToQuote(uint64 rawAmount) external view returns (uint256)
```

Converts a raw amount to its corresponding quote amount.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rawAmount | uint64 | The raw amount to be converted. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The converted quote amount. |

### baseToRaw

```solidity
function baseToRaw(uint256 baseAmount, uint16 priceIndex, bool roundingUp) external view returns (uint64)
```

Converts a base amount to its corresponding raw amount using a given price index.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | The base amount to be converted. |
| priceIndex | uint16 | The index of the price to be used for the conversion. |
| roundingUp | bool | Specifies whether the result should be rounded up or down. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The converted raw amount. |

### quoteToRaw

```solidity
function quoteToRaw(uint256 quoteAmount, bool roundingUp) external view returns (uint64)
```

Converts a quote amount to its corresponding raw amount.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quoteAmount | uint256 | The quote amount to be converted. |
| roundingUp | bool | Specifies whether the result should be rounded up or down. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint64 | The converted raw amount. |

### collectFees

```solidity
function collectFees(address token, address destination) external
```

Collects fees for either the protocol or host.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The token address to collect. It should be the quote token or the base token. |
| destination | address | The destination address to transfer fees. It should be the dao treasury address or the host address. |

### changeOrderOwner

```solidity
function changeOrderOwner(struct OrderKey orderKey, address newOwner) external
```

Change the owner of the order.

_Only the OrderToken contract can call this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| orderKey | struct OrderKey | The order key of the order. |
| newOwner | address | The new owner address. |

