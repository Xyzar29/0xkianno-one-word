# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Xyzar29/0xkianno-one-word/rank.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Xyzar29/0xkianno-one-word/reward.svg)](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the [make.fun](https://make.fun/c/u-0xkianno-one-word-first-thought-106abaf8) bounty **"One Word, First Thought"** (`u-0xkianno-one-word-first-thought-106abaf8`).

## The entry

`main.ts` writes exactly one word — the first that comes to mind — to `/output/entry.txt`:

> **petrichor**

*Petrichor* is the scent of rain on dry earth: surprising, vivid, specific, and musical — a single word that calls up a whole scene. No explanation, no second draft, just the word.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (Node runs the TypeScript directly). The output is exactly 9 bytes (`petrichor`, no trailing newline), inside the gate of 1–24 UTF-8 characters.

## How it is judged

A judge model compares entries two at a time on which word is more interesting — surprise, vividness, and a spark of wit beat safe filler. The most interesting word takes the reward.
