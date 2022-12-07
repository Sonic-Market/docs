---
id: glossary
title: Glossary
sidebar_position: 5
---

## Maker Order

Maker orders are orders that are stored in order books on a price-time priority basis, waiting to be matched with counterparty orders.
It’s similar to becoming a merchant at a marketplace - you have to set the price and the amount to sell and wait for the customers to come.
Naturally, it might take some time for a maker order to be filled.

## Taker Order

Taker orders are orders that “take” counterparty orders from order books.
It’s like being a customer visiting a marketplace - you can immediately take what the merchants are offering.
If there’s no offer that you find attractive, you’ll have to wait - or become a merchant yourself, and make a maker order.

## Limit Order

When it comes to placing orders on an order book, there are two types of orders that users can choose between - limit orders and market orders.
A limit order is an order with a “limit price” at which a user is willing to make an exchange.
When a new limit order is placed, if there are no counterparty orders on the order book that it can be matched with at the limit price or better, the order gets stored in the order book as a maker order.
Otherwise, the order is matched with existing maker orders on the order book as a taker order.

## Market Order

A market order is an order that takes counterparty orders from the order book until its order amount is filled, regardless of the price. It can be thought of as a “taker-only” order.

## Price Book

A price book is a predefined table of price points on which orders can be placed.
There are two types of price books - the Stable Price Book and the Volatile Price Book.
The former is a price book for stable pairs and the latter is for more general asset pairs.
The Stable Price Book has smaller gaps between prices compared to the Volatile Price Book because a single basis point difference matters more when trading between stablecoins compared to pairs like BTC-USDC.
