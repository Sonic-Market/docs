---
id: lock-pattern
title: Lock Pattern
sidebar_position: 5
---

Clober adopts the Lock Mechanism introduced in UniSwap v4 to ensure transactional integrity and efficiency. This mechanism offers two key advantages: atomic operation execution and efficient state management, which maintain the system's consistency and accuracy.

**Advantages of the Lock Mechanism:**

- **Atomic Operation Execution**: Ensures the integrity of transactions across multiple contract interactions by performing operations atomically.
- **Efficient State Management**: Through locking and unlocking processes, it manages all currency deltas before a lock is released, thereby enhancing the system's reliability.

The `lockAcquired` function allows the execution of the following functions within the `BookManager`, facilitating interaction with the `BookManager`:

- `open`
- `make`
- `take`
- `cancel`
- `claim`
- `withdraw`
- `settle`

This approach provides users and developers with powerful tools for efficiently managing complex trading strategies and operations. By implementing the proven Lock Mechanism from Uniswap V4, Clober enhances the flexibility and customization of liquidity provisioning and trading.