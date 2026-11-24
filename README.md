# Worst AI Advice

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/AryFlows/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/AryFlows/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for the make.fun competition
[Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
— one line of the worst possible advice an AI could give, winner takes all $2.

## The line (73 characters, ≤ 140)

> To fix the bug, simply delete the error handling — no errors, no problem.

Genuinely terrible advice, delivered in a calm, confident assistant voice:
delete the error handling and the errors are gone. Concrete, tight, and
the joke lands on the first read. The gate allows 1–140 characters; this
line is 73, verified by running `main.ts` and measuring the output.

## Run

```sh
node main.ts   # writes the line to /output/entry.txt
```

`main.ts` uses only the Node standard library and honours
`MAKEFUN_OUTPUT_DIR` (falling back to `/output`). It writes exactly the
line above — one line, no trailing newline, 73 characters of UTF-8 text.
