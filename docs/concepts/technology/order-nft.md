---
id: order-nft
title: Order NFT
sidebar_position: 9
---

When a maker order is placed, a corresponding NFT (ERC-721) is minted.

Order NFT Lifecycle:

- `mint`: An order NFT is minted when a maker order is placed.
- `burn`: An order NFT is burned when the order is no longer valid. For example, if an order is fully filled and the proceeds are claimed, its NFT gets burned. Likewise, if an order gets cancelled, the NFT gets burned accordingly.

OrderId, the unique identifier of orders, is determined by concatenating the order's BookId (24 bytes), tick (3 bytes), and orderIndex (5 bytes). For detailed encoding logic, refer to OrderId.sol.

IMPORTANT: An account authorized on the order NFT can decrease the intrinsic value of the order through the `cancel` or `claim` functions. Therefore, services utilizing order NFTs (e.g., order NFT market, etc.) should be developed with this in mind.