---
id: hooks
title: Hooks
sidebar_position: 8
---

Clober adopts and enhances the concept of “hooks” introduced in UniSwap v4 to further enhance the flexibility of orderbooks. While Uniswap V4 introduced hooks as a means to inject custom logic at various stages of a pool's lifecycle, Clober extends this concept by providing hooks throughout the entire lifecycle of making and taking orders. Specifically, hooks can be executed at any of the following points in the order lifecycle:

- `beforeOpen`
- `afterOpen`
- `beforeMake`
- `afterMake`
- `beforeTake`
- `afterTake`
- `beforeCancel`
- `afterCancel`
- `beforeClaim`
- `afterClaim`

This approach allows Clober V2 to facilitate the development of customized features such as maker whitelisting, oracle integrations, automated proceeds claiming, automated market-making bots, and so on.