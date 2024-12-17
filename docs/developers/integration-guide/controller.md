---
id: controller
title: Controller
sidebar_position: 1
---

The Controller contract serves as a high-level abstraction layer acting as a core interface between users and the BookManager contract in the Sonic Market system. Through this contract, users can intuitively and conveniently perform various order-related actions via a single contract interface. For example, they can open a Book, create limit orders (Make, Limit), consume liquidity with market orders (Take, Spend), claim proceeds from executed orders (Claim), or cancel unfilled portions of orders (Cancel)—all through a single endpoint. Additionally, the Controller supports ERC20 and ERC721 Permit functionalities, allowing users to obtain authorization and transfer tokens within the same transaction, without requiring prior approval. This enables more efficient capital management.

**Simplified Order Management**

By interacting directly with the BookManager through the Controller, overall complexity is reduced compared to direct communication with the BookManager itself. For instance, a single function call (Execute) can sequentially process multiple actions (Open, Make, Take, Spend, Claim, Cancel)

**Support for Various Order Actions**

- Open: Initiates a new Book, users can configure parameters such as quote, base, fee, and hook, enabling them to conduct a wide range of trades using that particular Book.

```solidity
struct OpenBookParams {
    IBookManager.BookKey key;
    bytes hookData;
}

function open(OpenBookParams[] calldata openBookParamsList, uint64 deadline)
```

- Make: Creates a limit order at a specific price (tick) by supplying a certain quote amount as liquidity.

```solidity
struct MakeOrderParams {
    BookId id;
    Tick tick;
    uint256 quoteAmount;
    bytes hookData;
}

function make(
    MakeOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC20PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

- Limit: Similar to Make, but it also executes a Take on the opposite Book simultaneously. This logic mirrors the traditional Limit Order concept found on centralized exchanges (CEXs).

```solidity
struct LimitOrderParams {
    BookId takeBookId;
    BookId makeBookId;
    uint256 limitPrice;
    Tick tick;
    uint256 quoteAmount;
    bytes takeHookData;
    bytes makeHookData;
}

function limit(
    LimitOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC20PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

- Take: Executes a market order that consumes liquidity from existing limit orders. Within a single call, it can move through multiple ticks to acquire the required amount of quote tokens. The Controller automatically obtains the necessary base tokens from the user.

```solidity
struct TakeOrderParams {
    BookId id;
    uint256 limitPrice;
    uint256 quoteAmount;
    uint256 maxBaseAmount;
    bytes hookData;
}

function take(
    TakeOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC20PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

- Spend: Similar to "Take," but here you first commit a certain amount of base tokens, using them to execute a market order and thereby acquire quote tokens.

```solidity
struct SpendOrderParams {
    BookId id;
    uint256 limitPrice;
    uint256 baseAmount;
    uint256 minQuoteAmount;
    bytes hookData;
}

function spend(
    SpendOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC20PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

- Claim: Allows users to claim base tokens obtained from previously executed orders, thereby realizing the profits from a completed trade.

```solidity
struct ClaimOrderParams {
    OrderId id;
    bytes hookData;
}

function claim(
    ClaimOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC721PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

- Cancel: Cancels unfilled (or partially filled) orders and returns the remaining quote tokens to the user.

```solidity
struct CancelOrderParams {
    OrderId id;
    uint256 leftQuoteAmount;
    bytes hookData;
}
    
function cancel(
    CancelOrderParams[] calldata orderParamsList,
    address[] calldata tokensToSettle,
    ERC721PermitParams[] calldata permitParamsList,
    uint64 deadline
)
```

**Permit-Based Authorization Delegation**

The Controller accepts ERC20 and ERC721 permit parameters in functions like execute, make, take, spend, claim, and cancel. This enables users to grant token usage rights and simultaneously use or claim tokens in a single transaction—eliminating the need for a separate approval transaction. As a result, the user experience (UX) improved.

**State Query Functions**

Internally referencing the BookManager, the Controller provides pre-trade state information through several functions:

- **getDepth**: Retrieves the available quote liquidity for a given Book and tick.

```solidity
/**
 * @notice Returns the depth of a book
 * @param id The id of the book
 * @param tick The tick of the book
 * @return The depth of the book in quote amount
 */
function getDepth(BookId id, Tick tick) external view returns (uint256)
```

- **getHighestPrice**: Returns the highest order price in the Book.

```solidity
/**
 * @notice Returns the highest price of a book
 * @param id The id of the book
 * @return The highest price of the book with 2**96 precision
 */
function getHighestPrice(BookId id) external view returns (uint256)
```

- **getOrder**: Provides details for a given OrderId, including the order’s provider, price, remaining quote amount, and claimable base amount.

```solidity
/**
 * @notice Returns the details of an order
 * @param orderId The id of the order
 * @return provider The provider of the order
 * @return price The price of the order with 2**96 precision
 * @return openAmount The open quote amount of the order
 * @return claimableAmount The claimable base amount of the order
 */
function getOrder(OrderId orderId)
    external
    view
    returns (address provider, uint256 price, uint256 openAmount, uint256 claimableAmount)
```

Armed with this information, users can accurately assess the order book’s state before executing trades, making more informed decisions.

**Tick-Price Conversion Support**:

The Controller supports functions for converting between ticks and prices:

- **fromPrice**: Converts a given price (with 2**96 precision) into a tick value.

```solidity
/**
 * @notice Converts a price to a tick
 * @param price The price to convert
 * @return The tick
 */
function fromPrice(uint256 price) external pure returns (Tick)
```

- **toPrice**: Converts a tick value back into a price (2**96 precision).

```solidity
/**
 * @notice Converts a tick to a price
 * @param tick The tick to convert
 * @return The price with 2**96 precision
 */
function toPrice(Tick tick) external pure returns (uint256);
```

This feature frees users from manually managing tick calculations, enabling more intuitive price handling.