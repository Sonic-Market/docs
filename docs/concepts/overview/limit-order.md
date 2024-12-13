---
id: limit-order
title: Limit Orders
sidebar_position: 2
---

### What is a Limit Order?

A **Limit Order** allows you to specify the exact price at which you're willing to buy or sell an asset. Unlike market orders that execute immediately at the current market price, limit orders give you control over the execution price, ensuring trades occur at your preferred rates.

---

### How to Place a Limit Order on Sonic Market

1. **Navigate to the "Limit" Tab:**
    - On the Sonic Market interface, select the "Limit" tab to initiate a limit order.
2. **Select the Trading Pair:**
    - For example, choose the **S-USDC** pair to trade between Sonic's native token (S) and USDC.
3. **Enter Order Details:**
    - **Price:** Set the specific price at which you want to buy or sell.
    - **Amount:** Specify the quantity of S or USDC you wish to trade.
4. **Optional "Post Only" Feature:**
    - Enabling "Post Only" ensures your order is added to the order book without immediately matching existing orders, helping you avoid taker fees.
5. **Submit Your Order:**
    - Review your order details and confirm to place the limit order.

---

### What Happens After Placing a Limit Order?

1. **Immediate Matching:**
    - If there are existing orders at your specified price, your order will execute immediately for the matching portion.
2. **Order Book Posting:**
    - Any unmatched portion of your order remains on the order book, awaiting a counterparty to fulfill it.
3. **Monitoring Your Orders:**
    - Active limit orders can be viewed and managed in the **Open Orders** section of Sonic Market.

---

### Benefits of Using Limit Orders on Sonic Market

1. **Price Control:**
    - Limit orders allow you to set the exact price at which you want to trade, ensuring transactions occur at favorable rates.
2. **MEV Resistance:**
    - By specifying your desired price, limit orders protect against Miner Extractable Value (MEV) attacks, preventing external parties from frontrunning or manipulating your trades.
3. **Contribution to Liquidity:**
    - Unmatched portions of your limit order add to the order book's liquidity, supporting the overall health of the Sonic Market.
4. **Synergy with Sonic's High Throughput and Low Latency:**
    - Sonic's blockchain is designed for high-speed transactions with over 10,000 TPS and sub-second finality,  ensuring that your limit orders are processed swiftly and efficiently, enhancing your trading experience.

---

### Understanding Fills and Claims

1. **Partial and Full Fills:**
    - Your limit order can be fully filled (entire order matched) or partially filled (only a portion matched), with the remainder staying open until fulfilled or canceled.
2. **Manual Claiming of Proceeds:**
    - After your order is filled, the resulting assets are not automatically added to your wallet. You need to manually claim them, a process designed to optimize gas fees and align with Sonic Market's on-chain efficiency.
3. **Canceling Orders:**
    - If you cancel a partially filled order, the filled portion remains settled, and the unfilled portion is returned to your wallet in its original asset form.

---

### Frequently Asked Questions (FAQ)

**1. What happens if I place a limit order above or below the current market price?**

- For buy orders, if your limit price is above the current market price, the order will execute immediately up to the available amount at or below your limit price. The remaining amount will be posted to the order book at your specified price. For sell orders, if your limit price is below the current market price, the order will execute immediately up to the available amount at or above your limit price, with the remainder posted to the order book.

**2. Why do I need to manually claim proceeds?**

- Manual claiming helps reduce gas fees by batching transactions, enhancing the efficiency of on-chain operations.

**3. Can I cancel a partially filled order?**

- Yes, you can cancel a partially filled order. The filled portion remains settled, and the unfilled portion is returned to your wallet.

**4. What does "Post Only" mean?**

- "Post Only" ensures your order is added to the order book without executing against existing orders, allowing you to provide liquidity without incurring taker fees.

**5. How does Sonic Market prevent MEV attacks?**

- By executing trades strictly at your specified price or better, Sonic Market's limit orders prevent external parties from manipulating or frontrunning your transactions, offering protection against MEV attacks.

---

### Key Takeaways

- **Control Your Trades:** Limit orders empower you to set exact prices for buying or selling, ensuring trades occur at your preferred rates.
- **Enhance Security:** The MEV-resistant nature of limit orders on Sonic Market safeguards your trades from external manipulation.
- **Support the Community:** By placing limit orders, you contribute to the liquidity and robustness of the Sonic Market, aligning with Sonic's high-performance blockchain capabilities.

Leverage Sonic's high throughput and low-latency blockchain to execute your trading strategies effectively with limit orders on Sonic Market!