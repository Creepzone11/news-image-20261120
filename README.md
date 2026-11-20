# The World Today — Friday, 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Creepzone11/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/Creepzone11/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

One day, one page: a newspaper front page that sums up the world's news of
Friday, 20 November 2026, in a single 1024&times;1024 image. This is our own
design — a classic newspaper ("THE WORLD TODAY"), drawn programmatically with
Python PIL so every word is exact, no AI-garbled text.

## What it shows

40 stories from every region, all of them events that happened — or were first
reported — on Friday 20 November 2026:

- **Heroes (Friday events):** Cyclone Akvan makes landfall on the Odisha
  coast (300,000 evacuated) and Kyiv is hit by a six-hour missile barrage
  (5 killed, three bridges damaged). Both are drawn as simple vector-style
  illustrations: a cyclone spiral over the coast, and missile trails over
  the Kyiv skyline.
- **World:** the COP31 draft drops the fossil fuel phase-out; BepiColombo
  reaches Mercury after eight years; the Gaza death toll tops 74,700; the
  IMF warns global debt will near 100% of GDP; scientists grow potatoes in
  moon soil.
- **Africa:** Kenya discharges its last Ebola patient; a migrant boat
  capsizes off Senegal; a Sudan drone strike kills 10 at a gold mine.
- **Europe:** a UK–EU reset agrees 100,000 youth visas; the Coalition of
  the Willing meets in Berlin; Zelenskyy says Russia lost 2026 on the
  battlefield; the UK pledges 1,000+ drones for Ukraine; Estonia will close
  its border with Russia; hundreds of thousands protest in Prague; Denmark
  ratifies the Greenland security deal.
- **Middle East:** the Iran war enters its ninth month; Iraq orders an
  Iran-backed militia out; Saudi Arabia cancels cycling and golf events
  amid the attacks.
- **Asia:** India lets Japan fire missiles on its ranges; the IAEA says
  North Korea is expanding enrichment; unrest grips Bangladesh ahead of
  Hasina's return; Malaysia ends visa-free entry for Indians; IndiGo
  cancels Saudi flights until 30 November.
- **Markets:** stocks slide a fifth day and the Nikkei plunges 4.8%; Japan
  inflation rises; the Philippines and Chile sign a free trade deal.
- **Tech &amp; Science:** Nvidia halts H200 chip shipments to China; Google
  launches a Gemini agent for Mac.
- **United States:** the Senate passes the energy bill 62–33; Trump rules
  out new Iran strikes in 2026; the White House fires its cyber chief;
  Trump pardons Pete Rose; a poll blames tariffs most for the cost of
  living.
- **Culture &amp; Sport:** Messi bids farewell to Argentina; Pochettino
  takes over Manchester United; India bowls out New Zealand for 368.
- **Latin America:** Bukele registers for a third term; Brazil recognizes
  Raoni's ancestral land.

Every story carries its source in parentheses (Reuters, AP, AFP, BBC,
The Hindu, Al Jazeera, The Times, USA Today, WSJ, Dawn, The Japan Times,
The Neuron, myKhel).

## A note on dates

Items first reported on Thursday — the Shenzhen summit, Anthropic's IPO
pricing, the ICJ verdict and the GTA VI launch — are not shown here as
Friday news. The heroes and every story on the page are Friday 20 November
2026 events.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs with no network and writes the same bytes on
every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Bounty: https://make.fun/bounty/news-image-20261120
- Image: `entry.png` (1024&times;1024 PNG, 194,161 bytes, under 1 MiB)
- License: MIT
