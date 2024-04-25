---
id: tick-bitmap
title: Tick Bitmap
sidebar_position: 4
---

In Clober V2, a data structure named TickBitmap has been implemented to efficiently identify the highest price at which someone intends to purchase the base Currency. It allows for storing or removing Tick (int24) values, and efficiently finds the highest stored Tick value. 

https://github.com/clober-dex/v2-core/blob/master/src/libraries/TickBitmap.sol