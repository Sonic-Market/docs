---
id: quotes
title: /quotes
sidebar_position: 1
---

# API Documentation

## Find swap paths

Find the best swap path for a given token pair in Polygon zkEVM Mainnet.

**Request:**

- Method: GET
- Path: [`/quotes`](https://pathfinder.clober-api.com/quotes)

#### **Parameters**

| Name        | Type     | Description                                                                                                                                            |
|-------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `token_in`  | `string` | The address of the token to swap from.                                                                                                                 |
| `token_out` | `string` | The address of the token to swap to.                                                                                                                   |
| `amount_in` | `number` | The amount of the input token to swap.                                                                                                                 |
| `parts`     | `number` | (Optional) The number of parts to split the swap into. Maximum: `20`. We strongly recommend using `1` in Polygon zkEVM. The default value is `1`.      |
| `max_hops` | `number` | (Optional) The maximum number of hops to use in the path. Maximum: `10`. We strongly recommend using `5` in Polygon zkEVM. The default value is `5`.   |
|`fastest_mode`| `boolean` | (Optional) Whether to use the fastest mode. We strongly recommend using `false` in Polygon zkEVM. The default value is `false`.                        | 
| `gas_effective_mode` | `boolean` | (Optional) Whether to use the gas-efficient mode. If true, the route takes into account gas fees when providing the optimal path. The default value is `false`. |

**Example Request:**

- [Sell 1 WETH to USDC in Polygon zkEVM with 1 part](https://pathfinder.clober-api.com/quotes?tokenIn=0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9&tokenOut=0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035&amountIn=1000000000000000000&parts=1&maxHops=5&fastestMode=false&&gasEffectiveMode=false)
- [Sell 1 WETH to USDC in Polygon zkEVM with sub-part](https://pathfinder.clober-api.com/quotes?tokenIn=0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9&tokenOut=0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035&amountIn=1000000000000000000&parts=20&maxHops=5&fastestMode=false&&gasEffectiveMode=false)


**Response:**

| Field               | Type        | Description                                             |
|---------------------|-------------|---------------------------------------------------------|
| `success`           | `boolean`   | Indicates whether the request was successful.            |
| `result`            | `ResultDto` | The result of the request.                               |
| `error`             | `string`    | The error message if the request was not successful.     |

#### **ResultDto**

| Field                       | Type             | Description                                                   |
|-----------------------------|------------------|---------------------------------------------------------------|
| `routes`                    | [`RouteDto[]`](/api/aggregator/quotes#routedto) | The routes of the request.                                    |  
| `amount_in`                 | `number`         | The amount of the input token to swap.                        |
| `amount_out`                | `number`         | The amount of the output token to swap.                       |
| `parts`                     | `number`         | The number of parts used to split the swap.                   |
| `runtime_graph_algorithm`   | `number`         | The runtime graph algorithm used to find the best path.       |    
| `runtime`                   | `number`         | The runtime of the request.                                   |
| `block_number`              | `number`         | The block number of the request.                              |
| `acc_gas_fee`               | `number`         | The accumulated gas fee of the request.                       |

#### **RouteDto**
| Field               | Type                | Description                                                                                                          |
|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------|
| `part`              | `number`            | The part of the total amount. For example, if `parts` is 20 and `part` is 2, the input amount of the route is 2/20. |
| `sub_routes`        | [`SubRouteDto[]`](/api/aggregator/quotes#subroutedto) | The sub routes of the route.                                                                                         |

#### **SubRouteDto**
| Field               | Type          | Description                                                             |
|---------------------|---------------|-------------------------------------------------------------------------|
| `dex_id`            | `string`      | The ID of the DEX. (ex, Clober, Quickswap)                              |
| `dex_type`          | [`DexType`](/api/aggregator/quotes#dextype) | The type of the DEX.                                                    |
| `tokens`            | `string[]`    | The tokens involved in the sub route.                                   |
| `pools`             | `string[]`    | The pools used in the sub route. (`pools.length - 1 === tokens.length`) |

#### **DexType**
```typescript
export const DexType = {
    Mock: 0,
    WrappedNative: 1,
    UniSwapV2: 2,
    Algebra: 3,
    UniSwapV3: 4,
    KokonutSwap: 5,
    MantisSwap: 6,
    Gmx: 7,
    Clober: 8,
}
```

### Example Response
```json
{
   "success":true,
   "result":{
      "routes":[
         {
            "part":1,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0x1E4a5963aBFD975d8c9021ce480b42188849D41d"
                  ],
                  "pools":[
                     "0x4412c7152c658967a3360F0A1472E701bDBeca9E"
                  ]
               },
               {
                  "dex_id":"MANTISSWAP",
                  "dex_type":"MantisSwap",
                  "tokens":[
                     "0x1E4a5963aBFD975d8c9021ce480b42188849D41d",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0x12d41b6DF938C739F00c392575e3FD9292d98215"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"
                  ],
                  "pools":[
                     "0xFA08b8866cBb9b25375d0f9c6562066ec361C8DE"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB"
                  ]
               }
            ],
            "gas_fee":1439945
         },
         {
            "part":1,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"
                  ],
                  "pools":[
                     "0xFA08b8866cBb9b25375d0f9c6562066ec361C8DE"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xFC4A3A7dc6b62bd2EA595b106392f5E006083b83",
                     "0x1Cd1D779CFd8E86b40a254046377561Ea76E22e4"
                  ]
               }
            ],
            "gas_fee":1210000
         },
         {
            "part":1,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0x1E4a5963aBFD975d8c9021ce480b42188849D41d",
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"
                  ],
                  "pools":[
                     "0x12D1484297Bb9771F3dfFC8fF8026f7d797FF4ee",
                     "0x94792a33fDBfCf0290A1A63F571a0F598401b319"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xFC4A3A7dc6b62bd2EA595b106392f5E006083b83",
                     "0x1Cd1D779CFd8E86b40a254046377561Ea76E22e4"
                  ]
               }
            ],
            "gas_fee":1400000
         },
         {
            "part":1,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB",
                     "0xC4aD89d0A07081871f3007079f816B0757D2638E"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xb15efAa05269a7220875521b5dE0A2DEE035A21A"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4"
                  ],
                  "pools":[
                     "0x68cc0516162b423930cD8448A2a00310E841E7f5"
                  ]
               },
               {
                  "dex_id":"MANTISSWAP",
                  "dex_type":"MantisSwap",
                  "tokens":[
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0x12d41b6DF938C739F00c392575e3FD9292d98215"
                  ]
               }
            ],
            "gas_fee":1779945
         },
         {
            "part":1,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9"
                  ],
                  "pools":[
                     "0xFA08b8866cBb9b25375d0f9c6562066ec361C8DE"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xFC4A3A7dc6b62bd2EA595b106392f5E006083b83",
                     "0x1Cd1D779CFd8E86b40a254046377561Ea76E22e4"
                  ]
               }
            ],
            "gas_fee":1210000
         },
         {
            "part":3,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB",
                     "0x68cc0516162b423930cD8448A2a00310E841E7f5"
                  ]
               },
               {
                  "dex_id":"MANTISSWAP",
                  "dex_type":"MantisSwap",
                  "tokens":[
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0x12d41b6DF938C739F00c392575e3FD9292d98215"
                  ]
               },
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D"
                  ],
                  "pools":[
                     "0xC4aD89d0A07081871f3007079f816B0757D2638E"
                  ]
               },
               {
                  "dex_id":"DOVESWAP_V3",
                  "dex_type":"UniSwapV3",
                  "tokens":[
                     "0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0xb15efAa05269a7220875521b5dE0A2DEE035A21A"
                  ]
               }
            ],
            "gas_fee":1779945
         },
         {
            "part":12,
            "sub_routes":[
               {
                  "dex_id":"QUICKSWAP_V3",
                  "dex_type":"Algebra",
                  "tokens":[
                     "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4"
                  ],
                  "pools":[
                     "0xc44AD482f24fd750cAeBa387d2726d8653F8c4bB",
                     "0x68cc0516162b423930cD8448A2a00310E841E7f5"
                  ]
               },
               {
                  "dex_id":"MANTISSWAP",
                  "dex_type":"MantisSwap",
                  "tokens":[
                     "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4",
                     "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035"
                  ],
                  "pools":[
                     "0x12d41b6DF938C739F00c392575e3FD9292d98215"
                  ]
               }
            ],
            "gas_fee":1249945
         }
      ],
      "amount_in":1000000000000000000,
      "amount_out":1877120925,
      "parts":20,
      "runtime_graph_algorithm":4,
      "runtime":99,
      "block_number":2376748,
      "acc_gas_fee":10069780
   },
   "error":null
}
```
