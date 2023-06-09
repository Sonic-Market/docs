---
id: markets
title: Market
sidebar_position: 1
---

# API Documentation

## Get Markets

Retrieves a list of markets on a specific chain.

**Request:**

- Method: GET
- Path: `/:chain/markets`

#### Parameters

| Name           | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `chain`        | `string` | The ID of the chain.                      |

**Example Request:**

```
GET /:chain/markets
```

#### Response

Returns an object with an array of market objects.

| Field               | Type          | Description                                               |
| ------------------- | ------------- | --------------------------------------------------------- |
| `markets`           | `MarketDto[]` | An array of market objects representing the available markets. |

Each market object has the following fields:

| Field                  | Type                     | Description                                                        |
| ---------------------- | ------------------------ |--------------------------------------------------------------------|
| `address`              | `string`                 | The address of the market.                                         |
| `name`                 | `string`                 | The name of the market.                                            |
| `priceBookStrategy`    | `'arithmetic'` or `'geometric'` | The strategy used for the price book.                              |
| `priceBookA`           | `string`                 | The value of price book A.                                         |
| `priceBookD`           | `string` or `null`       | The value of price book D, or `null` if not applicable.            |
| `priceBookR`           | `string` or `null`       | The value of price book R, or `null` if not applicable.            |
| `baseToken`            | `TokenDto`               | The details of the base token used in the market.                  |
| `quoteToken`           | `TokenDto`               | The details of the quote token used in the market.                 |
| `orderCanceler`        | `string`                 | The address of the order canceler for the market.                  |
| `unitSize`             | `string`                 | The unit size for the market.                                      |
| `ask`                  | `Price` or `null`        | The ask price for the market, or `null` if not available.          |
| `bid`                  | `Price` or `null`        | The bid price for the market, or `null` if not available.          |
| `last`                 | `Price` or `null`        | The last traded price for the market, or `null` if not available.  |
| `high24h`              | `Price` or `null`        | The highest price in the last 24 hours, or `null` if not available. |
| `low24h`               | `Price` or `null`        | The lowest price in the last 24 hours, or `null` if not available. |
| `change1h`             | `number` or `null`       | The price change in the last 1 hour, or `null` if not available.   |
| `change24h`            | `number` or `null`       | The price change in the last 24 hours, or `null` if not available. |
| `quoteVolume24h`       | `number`                 | The trading volume in the quote token in the last 24 hours.        |
| `volumeUsd24h`         | `number`                 | The trading volume in USD in the last 24 hours.                    |
| `accumulatedVolumeUsd` | `number`                 | The accumulated trading volume in USD.                             |
| `makerFee`             | `number`                 | The maker fee percentage for the market.                           |
| `takerFee`             | `number`                 | The taker fee percentage for the market.                           |
| `verified`             | `boolean`                | Indicates whether the market is verified or not.                   |

**Example Response:**

```json
{
  "markets": [
    {
      "address": "0x1c230Df6364af81d1585C3B3e6aC5aaD2daD9bD9",
      "name": "DAI/USDC",
      "priceBookStrategy": "arithmetic",
      "priceBookA": "100000000000000",
      "priceBookD": "100000000000000",
      "priceBookR": null,
      "baseToken": {
        "name": "Dai Stablecoin",
        "website": "http://www.makerdao.com/",
        "description": "MakerDAO is an open-source project on the Ethereum blockchain and a Decentralized Autonomous Organization1 created in 2014. The project is managed by people around the world who hold its governance token, MKR. Through a system of scientific governance involving Executive Voting and Governance Polling, MKR holders manage the Maker Protocol and the financial risks of Dai to ensure its stability, transparency, and efficiency. MKR voting weight is proportional to the amount of MKR a voter stakes in the voting contract, DSChief. In other words, the more MKR tokens locked in the contract, the greater the voter’s decision-making power.",
        "explorer": "https://etherscan.io/token/0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "type": null,
        "symbol": "DAI",
        "logo": "https://storage.googleapis.com/clober-tokens/dai.png",
        "decimals": 18,
        "status": null,
        "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "tags": [
        ],
        "links": [
        ],
        "isWrappedNative": false
      },
      "quoteToken": {
        "name": "USD Coin",
        "website": "https://www.centre.io/",
        "description": "Token Introduction: USD Coin (USDC) is a stablecoin fully backed by the US dollar and developed by the Centre consortium. Centre issues and redeems USDC without any extra fee and is licensed as a money-transmitter in the US and as an e-money institution in Europe. USDC can always be redeemed 1:1 to US dollars. Funds (for collateral) are held in segregated bank accounts, that are monitored and audited by third-parties. USD Coin has become one of the largest stablecoins (with a supply approaching a billion), its support has been extended to multiple decentralized applications (e.g., DeFi) and a wide variety of exchanges (e.g., Coinbase, Binance, Kraken).",
        "explorer": "https://etherscan.io/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "type": null,
        "symbol": "USDC",
        "logo": "https://storage.googleapis.com/clober-tokens/usdc.png",
        "decimals": 6,
        "status": null,
        "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "tags": [
        ],
        "links": [
        ],
        "isWrappedNative": false
      },
      "orderCanceler": "0x99228D1823baFa822dAB2B2f0a02922082f25E9E",
      "unitSize": "1",
      "makerFee": -0.001,
      "takerFee": 0.009,
      "ask": null,
      "bid": {
        "index": 10000,
        "value": "1.000100000000000000"
      },
      "last": {
        "index": 10001,
        "value": "1.000200000000000000"
      },
      "high24h": null,
      "low24h": null,
      "change1h": 0,
      "change24h": 0,
      "quoteVolume24h": 0,
      "volumeUsd24h": 0,
      "accumulatedVolumeUsd": 0.399902,
      "verified": true
    }
  ]
}
```

## Market Order Book

Retrieves the order book for a specific market on a given chain.

**Request:**

- Method: GET
- Path: `/:chain/markets/:market/order-book`

#### Parameters

| Name           | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `chain`        | `string` | The ID of the chain.                      |
| `market`       | `string` | The address of the market.                |

**Example Request:**

```
GET /:chain/markets/:market/order-book
```

#### Response

Returns an object with the order book for the specified market.

| Field       | Type              | Description                                         |
| ----------- | ----------------- | --------------------------------------------------- |
| `asks`      | `OrderBookElement[]` | An array of order book elements representing the asks. |
| `bids`      | `OrderBookElement[]` | An array of order book elements representing the bids. |

Each order book element has the following fields:

| Field         | Type     | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| `priceIndex`  | `number` | The index of the price in the order book.        |
| `price`       | `string` | The price of the order.                          |
| `rawAmount`   | `string` | The raw amount of the order.                      |
| `baseAmount`  | `string` | The base amount of the order.                     |

**Example Response:**

```json
{
  "bids":[
    {
      "priceIndex":9994,
      "price":"0.999500000000000000",
      "rawAmount":"27214172539",
      "baseAmount":"27227.78643221610805402701"
    },
    {
      "priceIndex":9991,
      "price":"0.999200000000000000",
      "rawAmount":"52750000000",
      "baseAmount":"52792.23378702962369895917"
    }
  ],
  "asks":[
    {
      "priceIndex":10004,
      "price":"1.000500000000000000",
      "rawAmount":"6524965311",
      "baseAmount":"6521.70445877061469265367"
    },
    {
      "priceIndex":10007,
      "price":"1.000800000000000000",
      "rawAmount":"26020800000",
      "baseAmount":"26000"
    }
  ]
}
```
