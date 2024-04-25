---
id: book-manager
title: Book Manager
sidebar_position: 3
---

Clober’s orderbook contract adopts a monolithic design, where a single contract called BookManager contains all the book instances. As a result, all orders, reserves, and states are managed within a single contract.

The major interfaces of the BookManager are as follows:

1. **Open**: This creates a new Book instance within the BookManager. Note that this does not create a separate contract. It is configured through the Book’s setting, known as the BookKey.
2. **Make**: This function places a new (bid-side) maker order on a designated Book.
3. **Take**: This function places a new (ask-side) taker order that consumes the counterparty maker orders at a specific tick on a designated Book. Note that technically it is possible to take from a non-top-of-the-book price, even though it is not reasonable to do so.
4. **Claim**: When a maker order is filled, the user may call this function to receive the proceeds.
5. **Cancel**: Users may cancel their maker orders using this function.

There are additional functions regarding the lock pattern, which will be discussed in the later sections.