---
id: unit-size
title: Unit Size
sidebar_position: 5
---

unitSize is a variable that sets the unit amount of trades of each orderbook. Given unitSize, the maximum trade size is capped at (2^64-1) * unitSize. For example, setting the unitSize to 1 for ETH restricts the maximum order size to 18.45 ETH, which is too constraining. This is because ETH is a 18-decimal token, so unitSize of 1 in this case means that the unit amount of trade is 10^(-18) ETH. For this reason, it is usually recommended to set the unitSize higher, like 10^12, for such assets. Likewise, for assets with small decimals like USDC, unitSize of 1 is recommended.