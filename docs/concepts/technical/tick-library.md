---
id: tick-library
title: Tick Library
sidebar_position: 5
---

In Clober V2, the TickLibrary has been developed to convert Ticks into prices. The TickLibrary contains two functions: fromPrice and toPrice. The core logic in BookManager does not use fromPrice, but only utilizes toPrice. The price is represented as a fixed-point number with a precision of 2^96.

https://github.com/clober-dex/v2-core/blob/master/src/libraries/Tick.sol
