---
id: users
title: User
sidebar_position: 3
---

## Get User Token Balance

Retrieves the token balance for a specific user on a given chain.

**Request:**

- Method: GET
- Path: `/:chain/users/:user/balance`

#### Parameters

| Name           | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `chain`        | `string` | The ID of the chain.                      |
| `user`         | `string` | The address of the user.                  |
| `tokens`       | `string[]` | (Optional) An array of token addresses to filter the balance. |

**Example Request:**

```
GET /:chain/users/:user/balance?tokens=0xtoken1,0xtoken2
```

#### Response

Returns an object with the user's balance and token information.


| Field                 | Type       | Description                                           |
| --------------------- | ---------- |-------------------------------------------------------|
| `address`             | `string`   | The address of the token.                             |
| `symbol`              | `string`   | The symbol of the token.                              |
| `logo`                | `string`   | The URL of the token's logo image.                    |
| `isWrappedNative`     | `boolean`  | Indicates whether the token is a wrapped native token. |
| `nativeBalance`       | `string`   | The user's balance of the native token (ETH).         |
| `balance`             | `string`   | The user's balance of the token.                      |
| `claimable`           | `string`   | The amount yet to be claimed.                         |
| `claimableOrderKeys`  | `string[]` | An array of claimable order keys.                     |
| `open`                | `string`   | The amount locked in limit orders.                    |
| `total`               | `string`   | The total amount of the token.                        |
| `allowance`           | `string`   | The allowance granted to the router.                  |
| `decimals`            | `number`   | The number of decimal places. |
**Example Response:**

```json
{
  "balance": "100.000000000000000000",
  "tokens": [
    {
      "address": "0x912CE59144191C1204E64559FE8253a0e49E6548",
      "symbol": "ARB",
      "logo": "https://storage.googleapis.com/clober-tokens/ARB.svg",
      "isWrappedNative": false,
      "nativeBalance": "100.000000000000000000",
      "balance": "100.000000000000000000",
      "claimable": "100.000000000000000000",
      "claimableOrderKeys": [],
      "open": "100.000000000000000000",
      "total": "100.000000000000000000",
      "allowance": "100.000000000000000000",
      "decimals": 18
    },
    {
      "address": "0x7a5D193fE4ED9098F7EAdC99797087C96b002907",
      "symbol": "plsARB",
      "logo": "https://storage.googleapis.com/clober-tokens/plsarb-token.svg",
      "isWrappedNative": false,
      "nativeBalance": "100.000000000000000000",
      "balance": "100.000000000000000000",
      "claimable": "100.000000000000000000",
      "claimableOrderKeys": [],
      "open": "100.000000000000000000",
      "total": "100.000000000000000000",
      "allowance": "100.000000000000000000",
      "decimals": 18
    }
  ]
}
```
