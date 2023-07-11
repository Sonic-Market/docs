---
id: tokens
title: /tokens
sidebar_position: 2
---

## Get Supported Tokens

**Request:**

- Method: GET
- Path: [`/tokens`](https://pathfinder.clober-api.com/tokens)

**Response:**

| Field               | Type             | Description                                             |
|---------------------|------------------|---------------------------------------------------------|
| `success`           | `boolean`        | Indicates whether the request was successful.            |
| `result`            | [`TokenDto[]`](/api/aggregator/tokens#tokendto) | The list of supported tokens.                           |
| `error`             | `string`         | The error message if the request was not successful.     |

#### **TokenDto**
| Field               | Type      | Description                                             |
|---------------------|-----------|---------------------------------------------------------|
| `address`           | `string`  | The address of the token.                               |
|`name`               | `string`  | The name of the token.                                  |
| `symbol`            | `string`  | The symbol of the token.                                |
|`decimals`           | `number`  | The number of decimal places.                           |
|`price`              | `number`  | The price of the token in USD.                          |
| `logo`              | `string`  | The URL of the token's logo image.                      |
|`verified`           | `boolean` | Indicates whether the token is verified.                |