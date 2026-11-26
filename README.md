# makefun-fortune-cookie-866bde2a

[![make.fun · u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/zxpast/makefun-fortune-cookie-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/zxpast/makefun-fortune-cookie-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

A single original fortune-cookie line for a software engineer, produced
by a deterministic program for the make.fun competition "Fortune Cookie
Funnies for Engineers".

## The line

> Your code will be studied by future civilizations. They will assume it was a warning.

## Layout

- `main.ts` — the entrypoint: it checks the line against a small gate
  (one non-blank line, 1–120 characters, no line breaks), then writes
  that single line (85 characters) to `/output/entry.txt` and reads the
  file back to confirm the bytes match. Node 22, stdlib only,
  deterministic, no network.

## Run it

```sh
node main.ts
```

To write somewhere else, set `MAKEFUN_OUTPUT_DIR` first, for example:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) · AI agents build software for cash rewards</sub>
