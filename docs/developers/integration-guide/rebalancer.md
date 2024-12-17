---
id: rebalancer
title: Rebalancer
sidebar_position: 3
---

## **Overview**

**Rebalancer** is a project that provides liquidity to the orderbook DEX [Sonic Market](https://github.com/Sonic-Market) by placing limit orders in the orderbook, generating yield from market making. Similar to how you supply liquidity to an AMM-style pool, Rebalancer also receives user funds but redistributes that liquidity as limit orders (bids/asks) on Sonic-Market’s DEX orderbook.

## **Key Features**

1. **Maximizing Market Making Revenue**
   - Through Sonic-Market DEX’s orderbook, Rebalancer can place limit orders at specific Ticks (price ranges), potentially achieving higher market-making returns compared to supplying liquidity in an AMM.
2. **ERC6909-compliant LP Tokens**
   - When LPs (liquidity providers) supply assets to Rebalancer, they receive [ERC6909](https://eips.ethereum.org/EIPS/eip-6909) standard LP tokens in return.
3. **Flexible Strategy Module**
   - Each pool has a dedicated Strategy contract. Its computeOrders function calculates the appropriate set of orders (Ticks, size, etc.) for current market conditions. Whenever `rebalance()` is called, Rebalancer cancels existing orders in the orderbook and re-places them according to this strategy logic.

## **Contract Architecture**

Rebalancer consists of two core contracts plus an auxiliary **Router** (front-end helper):

1. **Rebalancer (IRebalancer)**
2. **Strategy (IStrategy)**
3. **Router (IRouter)**

Below is a description of each contract’s role, key functionalities, and interfaces.

### **1. Rebalancer (IRebalancer)**

**Role**

- Creates and manages pools (open)
- Handles liquidity supply (mint) and withdrawal (burn)
- Re-distributes orders on Sonic-Market DEX (rebalance)

**Key Functions / Structs**

```solidity
/// @notice Opens a new pool with the specified parameters.
/// @param bookKeyA The book key for the first book.
/// @param bookKeyB The book key for the second book.
/// @param salt The salt value.
/// @param strategy The address of the strategy.
/// @return key The key of the opened pool.
function open(
    IBookManager.BookKey calldata bookKeyA,
    IBookManager.BookKey calldata bookKeyB,
    bytes32 salt,
    address strategy
) external returns (bytes32 key);
```

- Creates a new pool, returning a unique key that identifies the pool.
- `bookKeyA`, `bookKeyB`: Sonic-Market DEX BookKeys for two tokens.
- `salt`: A salt value used for unique pool identification.
- `strategy`: The address of the pool-specific IStrategy contract.

```solidity
/// @notice Mints liquidity for the specified key.
/// @param key The key of the pool.
/// @param amountA The amount of the first token.
/// @param amountB The amount of the second token.
/// @param minLpAmount The minimum amount of liquidity tokens to mint.
/// @return The amount of liquidity tokens minted.
function mint(bytes32 key, uint256 amountA, uint256 amountB, uint256 minLpAmount)
    external
    payable
    returns (uint256);
```

- Supplies liquidity and mints LP tokens.
- `amountA` and `amountB` are the amounts of each asset (token) being supplied, and `minLpAmount` is the minimum LP token amount minted to guard against slippage.

```solidity
/// @notice Burns liquidity for the specified key.
/// @param key The key of the pool.
/// @param amount The amount of liquidity tokens to burn.
/// @param minAmountA The amount of the first token to receive.
/// @param minAmountB The minimum amount of the second token to receive.
/// @return The amounts of the first and second tokens to receive.
function burn(bytes32 key, uint256 amount, uint256 minAmountA, uint256 minAmountB)
    external
    returns (uint256, uint256);
```

- Burns LP tokens to withdraw the proportional amount of assets.

```solidity
/// @notice Rebalances the pool for the specified key.
/// @param key The key of the pool.
function rebalance(bytes32 key) external;
```

- Calls `Strategy.computeOrders()` to calculate new order placements and re-lists them on the Sonic-Market DEX.

### **2. Strategy (IStrategy)**

**Role**

- Defines how a pool’s orders are placed, including the Tick positions and amounts.
- Whenever Rebalancer calls `rebalance()`, it uses `computeOrders()` from the Strategy to figure out how to update orders in the orderbook.
- Includes hooks (`mintHook`, `burnHook`, `rebalanceHook`) that can run custom logic after minting, burning, or rebalancing.

**Key Methods**

```solidity
struct Order {
    Tick tick;
    uint64 rawAmount;
}

/// @notice Retrieves the orders for a specified key.
/// @param key The key of the pool.
/// @return ordersA The orders for the first token.
/// @return ordersB The orders for the second token.
/// @dev Clears pool orders if an error occurs and retains current orders if the list is empty.
function computeOrders(bytes32 key) external view returns (Order[] memory ordersA, Order[] memory ordersB);
```

- For a given pool key, calculates the orderbook positions and sizes for both tokens (A and B).
- Returns arrays of `Order { Tick tick; uint64 rawAmount; }`.
- An empty array means “keep the current orders.” If this function reverts, all existing orders are canceled.

### **3. Router (IRouter)**

**Role**

- Helps front-end interactions, making it easier for regular users to supply/withdraw liquidity.
- Can handle token swaps, permits, etc., in a single interface.
- When calling `mint()`, the Router can perform a swap first (via a swap router) to balance token ratios, then call Rebalancer’s mint.

**Key Structs / Functions**

```solidity
/// @notice Mints liquidity using the specified parameters, optionally performing a swap beforehand.
/// @dev
///  1. Optionally calls `router` with `swapParams` if `inCurrency` is non-zero and `amount` > 0.
///  2. Approves tokens for Rebalancer and calls `mint()` on behalf of the user.
/// @param key A unique key representing the liquidity pool in the Rebalancer.
/// @param amountA The amount of token A to add as liquidity.
/// @param amountB The amount of token B to add as liquidity.
/// @param minLpAmount The minimum LP tokens the user is willing to receive; reverts if slippage is too high.
/// @param currencyAPermitParams Permit parameters for token A (if needed).
/// @param currencyBPermitParams Permit parameters for token B (if needed).
/// @param swapParams Parameters for an optional swap to get token A or B.
function mint(
    bytes32 key,
    uint256 amountA,
    uint256 amountB,
    uint256 minLpAmount,
    ERC20PermitParams calldata currencyAPermitParams,
    ERC20PermitParams calldata currencyBPermitParams,
    SwapParams calldata swapParams
) external payable;
```

- Optionally performs a swap before supplying liquidity to Rebalancer.
- Internally calls `Rebalancer.mint()` after preparing tokens through the `swapRouter`.

## **Integration Scenario**

This section assumes an **external Yield Aggregator** (or Yield Farmer) wants to leverage Rebalancer to offer yield opportunities to users.

### **1. Pool Creation (Open)**

1. **Permission**
   - Anyone can create a pool.
   - If a (`bookKeyA`, `bookKeyB`, `salt`, `strategy`) combination is already in use, an `AlreadyOpened()` error occurs.
2. **Calling** `Rebalancer.open(...)`
   - Requires `IBookManager.BookKey` structs for `bookKeyA` and `bookKeyB`.
   - Provide the address of the IStrategy implementation for strategy.
   - On success, it returns a `bytes32 key` that identifies the new pool.

### **2. Liquidity Provision (Mint)**

The aggregator can pool user funds to supply liquidity to Rebalancer, receiving the [ERC6909](https://eips.ethereum.org/EIPS/eip-6909) LP tokens in return.

1. **Token Preparation**
   - Prepare two asset tokens (`tokenA`, `tokenB`) to be supplied into Sonic-Market DEX.
   - If needed, use the Router’s `swapParams` to convert from a single token into the desired ratio before supplying.
2. **Call** mint(`key`, `amountA`, `amountB`, `minLpAmount`)
   - The aggregator receives `lpAmount` of LP tokens upon success.
3. **LP Token Custody**
- Since the LP token is [ERC6909](https://eips.ethereum.org/EIPS/eip-6909), the aggregator can manage or store it in their contract or a user’s wallet as needed.

### **3. Withdrawing Liquidity (Burn)**

When the aggregator wants to retrieve all or part of its liquidity, the process has **two stages**:

1. `burn()`
   - Burns the `lpToken`.
   - The proportional amount of TokenA/B go back to the user/aggregator.

### **4. Rebalance**

- Calling `rebalance(key)` triggers a call to `IStrategy.computeOrders()`, generating a new set of orders.
- Existing orders are canceled (Cancel), and new ones are placed on Sonic-Market DEX.
- Any realized profits (executed orders) are reflected in the pool reserves, and therefore recognized when mint/burn is performed.
- Aggregators can call `rebalance()` periodically to optimize market-making efficiency.

## **Important Considerations**

1. **Slippage Protection**
   - Use parameters like `minLpAmount`, `minAmountA`, `minAmountB` during `mint()` and `burn()` to safeguard against excessive slippage.
2. **Strategy Replacement/Management**
   - Each pool is bound to a Strategy. If changes are needed, you might need to open a new pool.
3. **Rebalance Frequency**
   - Overly frequent calls incur high gas costs. Too infrequent calls might result in inefficiencies if the market moves significantly.

## **Summary**

- **Rebalancer** is an infrastructure optimized for orderbook-based market making on Sonic-Market.
- **Supply Liquidity**: `mint()` → receive [ERC6909](https://eips.ethereum.org/EIPS/eip-6909) LP tokens.
- **Withdraw Liquidity**: `burn()` → burn LP tokens.
- **Rebalance**: `rebalance()` redistributes liquidity at optimal price points.
- **Router** simplifies the process of swapping, minting, etc.

### **External Yield Aggregators** can interact with Rebalancer using this flow:

1. *(Optional)* Create a dedicated pool via `open()`.
2. Supply liquidity via `mint()` & receive LP tokens.
3. Periodically call `rebalance()` to reposition orders.
4. *(When desired)* Call `burn()` to withdraw liquidity.

Using the Router, you can bundle steps like swaps and permits, offering a smoother user experience.

## **References**

•	GitHub: https://github.com/Sonic-Market

We hope this document helps you successfully integrate with Rebalancer.