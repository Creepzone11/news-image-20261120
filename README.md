# The World Today — Friday, 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Creepzone11/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/Creepzone11/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

One day, one page: a newspaper front page that sums up the world's news of
Friday, 20 November 2026, in a single 1024&times;1024 image.

## What it shows

48 stories from every region, all of them events that happened — or were first
reported — on Friday 20 November 2026, date-checked:

- **Hero:** Trump, Xi and Putin meet in Shenzhen and sign a four-point pact
  on nuclear risk, UN reform, energy and the ICC — with no mention of Ukraine
  or Iran.
- **World:** the ICJ rules 9–6 that Myanmar committed genocide against the
  Rohingya; Russia pounds Kyiv hours after the summit; a Houthi missile hits
  the Riyadh wealth-fund tower; the COP31 draft drops the fossil fuel
  phase-out.
- **United States:** the Senate passes the energy permitting overhaul 62–33;
  the Senate rejects the Iran war-powers resolution 51–48; Trump says no more
  major Iran strikes in 2026; the White House fires its cyber chief; Trump
  pardons Pete Rose; a poll blames tariffs most for the cost of living.
- **Europe:** a UK–EU reset agrees 100,000 youth visas; the Coalition of the
  Willing meets in Berlin; Zelenskyy says Russia lost 2026 on the battlefield;
  the UK pledges 1,000+ drones for Ukraine; Estonia will close its border
  with Russia; hundreds of thousands protest in Prague.
- **Middle East:** the Iran war enters its ninth month; Israeli forces cross
  the Gaza ceasefire line; the Gaza death toll tops 74,700; Iraq orders an
  Iran-backed militia out; Denmark ratifies the Greenland security deal with
  the US; Saudi Arabia cancels cycling and golf events amid the attacks.
- **Asia:** India lets Japan fire missiles on its ranges; the IAEA says North
  Korea is expanding enrichment; Cyclone Akvan makes landfall in India;
  Bangladesh unrest ahead of Hasina's return; Xi meets Albanese and Prabowo;
  Malaysia ends visa-free entry for Indians; IndiGo cancels Saudi flights.
- **Africa:** Kenya discharges its last Ebola patient; a migrant boat capsizes
  off Senegal; a Sudan drone strike kills 10 at a gold mine.
- **Latin America:** Brazil recognizes Raoni's ancestral land; thousands
  protest Colombia's tax plans.
- **Markets:** stocks slide a fifth day and the Nikkei plunges 4.8%; the
  Anthropic IPO jumps 17% on its debut; the IMF warns global debt will near
  100% of GDP; Japan inflation rises; the Philippines and Chile sign a free
  trade deal.
- **Tech &amp; Science:** Nvidia halts H200 chip shipments to China; Google
  launches a Gemini agent for Mac; scientists grow potatoes in moon soil;
  Fiji and Tonga declare drought disasters.
- **Culture &amp; Sport:** a Van Gogh sells for a record $190.4 million; Messi
  bids farewell to Argentina; Pochettino takes over Manchester United; India
  bowls out New Zealand for 368.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs with no network and writes the same bytes on
every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Bounty: https://make.fun/bounty/news-image-20261120
- Image: `entry.png` (1024&times;1024 JPEG, under 1 MiB)
- License: MIT
