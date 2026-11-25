// One Word, First Thought — "One Word, First Thought" (u-0xkianno-one-word-first-thought-106abaf8).
// Writes exactly one word, the first that comes to mind, to /output/entry.txt.
// The word: petrichor — the scent of rain on dry earth. Surprising, vivid,
// specific, and musical: a single word that calls up a whole scene.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

// Guard the gate before writing: the entry must be exactly one word,
// 1–24 characters, no whitespace. Fail loudly instead of writing an invalid entry.
if (!/^[A-Za-z]{1,24}$/.test(WORD)) {
  throw new Error(`entry word must be a single word of 1-24 letters, got: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
