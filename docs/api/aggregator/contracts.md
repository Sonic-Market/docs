---
id: contract
title: Contract
sidebar_position: 3
---

# Aggregator Contract Address
- Polygon zkEVM Mainnet: [`0xD7B7F2BF1a72743851d91D07EE3789066255Fec3`](https://zkevm.polygonscan.com/address/0xD7B7F2BF1a72743851d91D07EE3789066255Fec3)

## Aggregator Contract Interface

```solidity

pragma solidity ^0.8.0;

interface IAggregator {
    struct SubRoute {
        uint256 dexType;
        address[] tokens;
        address[] pools;
        bytes extraData;
    }

    struct Route {
        uint256 inputAmount;
        SubRoute[] subRoutes;
    }
    
    function swap(
        Route[] calldata routes,
        uint256 inputAmount,
        uint256 minOutputAmount,
        uint256 expectedOutputAmount,
        address recipient
    ) external payable;
}

```

## Usage
Follow [clober-aggregator-example](https://github.com/clober-dex/clober-aggregator-example) to swap tokens on Polygon zkEVM Mainnet.