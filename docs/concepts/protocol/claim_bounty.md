---
id: claim-bounty
title: Claim Bounty
sidebar_position: 1
---

## Manual Claiming

While orders are settled instantly on the taker side,
makers need to manually claim their proceeds by calling claim on the smart contract.
Without this design choice, takers would have to settle an arbitrary number of orders
making the whole concept of a FOO (Fully On-chain Order book) unfeasible.

While Manual Claiming was one of the innovations essential in creating a truly scalable FOO,
we understood what this meant for our end-users and wanted to mitigate the UX hurdle caused by it.

## Claim Bounty

To mitigate the UX hurdles and lower the gas fee burden for users regarding manual claim,
a Claim Bounty can be set on orders to delegate the task of claiming. The claim bounty will
be similar to or lower than the gas fees that the user would have paid to claim it themselves.
Anybody can claim any order in lieu of the original owner, and if that order was completely filled
at the moment of claim, the claim bounty is rewarded to the claimer.

## Profiting off of Claim Bounties

All transactions on the EVM accrue a baseline gas fee regardless of what that transaction entails.
Therefore, it is significantly cheaper to claim several filled orders in one transaction than to
send a separate transaction for each claim.
The former will pay the baseline gas fee once while the latter will pay it multiple times.

By claiming filled orders in batch, bounty hunters can pay significantly less gas fees
than what the end-user would have had to pay in aggregate, allowing users to set up bounties
equal to or even less than what they would have paid and still have their bounties attractive
enough for bounty hunters. We will set up an open-source bounty hunter bot for those who are
interested in profiting off  claim bounties. With enough competition, end-users will rarely have to
claim their own proceeds improving the overall user experience.

Users who regularly make multiple claims at once can set the bounty to zero
and manually claim in batch to appreciate gas fee savings and not overpay bounty hunters.
