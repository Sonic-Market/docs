---
id: overview
title: Overview
sidebar_position: 1
---

# The Clober API

While every state is stored on smart contracts and it's theoretically possible to retrieve the current state of the application by using read contract calls, certain parts of the front end benefit greatly by using a custom backend that crawls through the events on the chain and cache them in a human readable form. The backend is especially important to show historically data. It also functions to alert users via websocket when and by how much their limit order has been filled. While a version of the Clober client that does not rely on a backend is in the works, the current version makes heavy use of the backend for better performance and ease of development.

## Host

The base url is https://prod.clober-api.com/.

`:chain` requires the chain id to query from.
