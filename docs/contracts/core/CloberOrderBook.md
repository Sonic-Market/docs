## CloberOrderBook

### UpdateOrderBook

```solidity
event UpdateOrderBook(uint16 priceIndex, uint32 totalRawAmount, bool isBid)
```

Emitted by the market when the total amount ordered changed for any price.
       Used to keep the order book up to data.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| priceIndex | uint16 | The index of the price on the price book |
| totalRawAmount | uint32 | The total raw amount left in given price index |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

### MakeOrder

```solidity
event MakeOrder(address payer, address user, uint32 rawAmount, uint256 transferAmount, uint32 claimIndex, uint16 priceIndex, bool isBid)
```

Emitted by the market when an order is created

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| payer | address | The address who send tokens to make the order |
| user | address | The address with the rights to claim the proceeds of the order when taken |
| rawAmount | uint32 | The ordered raw amount |
| transferAmount | uint256 | The exact token amount of the sent token |
| claimIndex | uint32 | The index to claim after this order is taken |
| priceIndex | uint16 | The index of the price on the price book |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

### TakeOrder

```solidity
event TakeOrder(address payer, address user, uint32 rawAmount, uint256 inAmount, uint256 outAmount, uint256 feeAmount, uint16 priceIndex, bool isBid)
```

Emitted by the market when an order takes liquidity from the order book

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| payer | address | The address who payed tokens to take the order |
| user | address | The recipient address of the traded token |
| rawAmount | uint32 | The ordered raw amount |
| inAmount | uint256 | The exact token amount of the user sent |
| outAmount | uint256 | The exact token amount of the user received |
| feeAmount | uint256 | The exact token amount of the taker fee |
| priceIndex | uint16 | The index of the price on the price book |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

### CancelOrder

```solidity
event CancelOrder(address user, uint32 rawAmount, uint256 transferAmount, uint32 claimIndex, uint16 priceIndex, bool isBid)
```

Emitted by the market when an order is canceled

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The owner of the order |
| rawAmount | uint32 | The ordered raw amount |
| transferAmount | uint256 | The exact token amount of the user received back |
| claimIndex | uint32 | The index of the user's claim in the claim list |
| priceIndex | uint16 | The index of the price on the price book |
| isBid | bool | The flag indicating whether it's a bid order or an ask order from the taker's perspective |

### ClaimOrder

```solidity
event ClaimOrder(address user, uint32 rawAmount, uint256 transferAmount, int256 feeAmount, uint256 bountyAmount, uint32 claimIndex, uint16 priceIndex, bool isBase)
```

Emitted by the market when the maker's taken order is claimed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The owner of the order |
| rawAmount | uint32 | The ordered raw amount |
| transferAmount | uint256 | The exact token amount of the user received |
| feeAmount | int256 | The exact token amount of the maker fee |
| bountyAmount | uint256 | The exact token amount of the claim bounty |
| claimIndex | uint32 | The index of the user's claim in the claim list |
| priceIndex | uint16 | The index of the price on the price book |
| isBase | bool | The flag indicating whether the user receives the base token or the quote token |

### SetFee

```solidity
event SetFee(int24 newMakeFee, int24 newTakeFee)
```

Emitted by the market when the fee parameters have been changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newMakeFee | int24 | The new value of maker fee |
| newTakeFee | int24 | The new value of taker fee |

### Claim

```solidity
struct Claim {
  uint32 claimedAmount;
  uint32 orderIndex;
  uint16 priceIndex;
  bool isBid;
  bool valid;
  uint160 claimBounty;
}
```

### Order

```solidity
struct Order {
  address user;
  uint32 claimIndex;
  uint32 amount;
}
```

### FeeInfo

```solidity
struct FeeInfo {
  int24 makeFee;
  int24 takeFee;
  uint104 protocolQuoteFee;
  uint104 protocolBaseFee;
}
```

### limitOrder

```solidity
function limitOrder(address user, uint32 rawAmount, uint256 baseAmount, uint16 priceIndex, uint160 claimBounty, uint256 options, bytes data) external payable
```

Take all the liquidity better or equal to the given priceIndex with the given tokens
       and add liquidity to make an order with the remaining tokens.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker/maker address |
| rawAmount | uint32 | The raw quote amount to trade, utilized at bid |
| baseAmount | uint256 | The base token amount to trade, utilized at ask |
| priceIndex | uint16 | The index of the price on the price book |
| claimBounty | uint160 | The fee amount in native token that claimer will take in future |
| options | uint256 | The value contains all options in bit scale.               `isBid` option for the right 1st bit, `postOnly` option for right 2nd bit. |
| data | bytes | Custom callback data |

### marketOrder

```solidity
function marketOrder(address user, uint16 limitPriceIndex, uint32 rawAmount, uint256 baseAmount, uint256 options, bytes data) external
```

Take all the liquidity with the given tokens until the given priceIndex

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The taker address |
| limitPriceIndex | uint16 | The price index to take until |
| rawAmount | uint32 | The raw amount to trade.        This value utilizes as maxRequiredAmount at bid or minReceivedAmount at ask. |
| baseAmount | uint256 | The base token amount to trade. If withBase, baseAmount        This value utilizes as maxRequiredAmount at ask or minReceivedAmount at bid |
| options | uint256 | The value contains all options in bit scale.               `isBid` option for the right 1st bit, `expendInput` option for right 2nd bit. |
| data | bytes | Custom callback data |

### cancel

```solidity
function cancel(uint32[] ids) external
```

Cancel orders by claimIds

_The length of ids must be controlled by the caller to avoid block gas limit exceeds_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ids | uint32[] | The claimIndex array |

### ClaimParams

```solidity
struct ClaimParams {
  address user;
  uint32[] ids;
}
```

### claim

```solidity
function claim(struct CloberOrderBook.ClaimParams[] claimParams) external
```

Claim the taken orders

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| claimParams | struct CloberOrderBook.ClaimParams[] | The array of claim params |

### getOrder

```solidity
function getOrder(bool isBid, uint16 priceIndex, uint32 orderIndex) external view returns (struct CloberOrderBook.Order)
```

Returns the order information

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |
| orderIndex | uint32 | The index of queue's order list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberOrderBook.Order | The raw data of an order |

### getCurrentOrderedAmount

```solidity
function getCurrentOrderedAmount(bool isBid, uint16 priceIndex) external view returns (uint32)
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
| [0] | uint32 | The left order amount in the price queue |

### getClaimable

```solidity
function getClaimable(bool isBid, uint16 priceIndex) external view returns (uint32)
```

Returns the claimable raw amount at the given price

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The total claimable amount in the price queue |

### getUserClaimLength

```solidity
function getUserClaimLength(address user) external view returns (uint32)
```

Returns the number of the user's claim histories

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The length of the user's claim list |

### getClaim

```solidity
function getClaim(address user, uint32 id) external view returns (struct CloberOrderBook.Claim)
```

Returns the claim information

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| id | uint32 | The id of Claim |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberOrderBook.Claim | The raw data of Claim |

### queueIndex

```solidity
function queueIndex(bool isBid, uint16 priceIndex) external view returns (uint32)
```

Returns the index of the queue

_Indicates the index of the next order_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The index of the queue |

### getFeeInfo

```solidity
function getFeeInfo() external view returns (struct CloberOrderBook.FeeInfo)
```

Returns the fee information of the market

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct CloberOrderBook.FeeInfo | The fee info struct value |

### treeGet

```solidity
function treeGet(bool isBid, uint16 priceIndex, uint32 treeIndex) external view returns (uint32)
```

Returns the value of the Segmented Segment Tree where the index indicates

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |
| treeIndex | uint32 | The index of the Segmented Segment Tree |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The value of Tree that treeIndex indicating |

### treeTotal

```solidity
function treeTotal(bool isBid, uint16 priceIndex) external view returns (uint32)
```

Returns the root value(the total summation) of the Segmented Segment Tree

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The total sum value of the Segmented Segment Tree |

### treeQuery

```solidity
function treeQuery(bool isBid, uint16 priceIndex, uint32 left, uint32 right) external view returns (uint32)
```

Returns the sum value of the Segmented Segment Tree in given range

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| priceIndex | uint16 | The index of the price on the price book |
| left | uint32 | The left index of the range to query |
| right | uint32 | The right index of the range to query |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The sum value in given range of the Segmented Segment Tree |

### heapHas

```solidity
function heapHas(bool isBid, uint16 value) external view returns (bool)
```

Returns whether the heap storage has the value or not

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| value | uint16 | The right index of the range to query |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | The value to check if heap has it |

### heapIsEmpty

```solidity
function heapIsEmpty(bool isBid) external view returns (bool)
```

Returns whether the heap storage is empty or not

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | The boolean flag if heap is empty |

### heapRoot

```solidity
function heapRoot(bool isBid) external view returns (uint16)
```

Returns the root value of the heap storage

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16 | The root value of the heap |

### heapLoad

```solidity
function heapLoad(bool isBid, uint8 index) external view returns (uint32)
```

Returns the extra storage value of the Octopus Heap at the given index

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| isBid | bool | The flag indicating whether it's a bid order or an ask order |
| index | uint8 | The leg index of Octopus Heap |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint32 | The extra value of the leg |

### indexToPrice

```solidity
function indexToPrice(uint16 index) external pure returns (uint128)
```

Returns the price that the given index indicates

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| index | uint16 | The price index |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint128 | The price in _PRICE_PRECISION |

### paused

```solidity
function paused() external view returns (bool)
```

Returns whether the market is paused or not

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | The flag represents if market is paused |

### setFee

```solidity
function setFee(int24 makeFee, int24 takeFee) external
```

Config fee values of the market by the market owner

_Only the market owner has the access_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| makeFee | int24 | The abs percentage of maker fee in _FEE_PRECISION |
| takeFee | int24 | The abs percentage of taker fee in _FEE_PRECISION |

### pause

```solidity
function pause() external
```

Pause the market by the market owner

_Only the market owner has the access_

### unpause

```solidity
function unpause() external
```

Unpause the market by the market owner

_Only the market owner has the access_

