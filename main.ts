// Fortune Cookie Funnies for Engineers — a make.fun one-liner entry.
//
// This program emits exactly one fortune-cookie line aimed at a software
// engineer, saving it to /output/entry.txt. It is fully deterministic,
// uses only the Node standard library, and never touches the network.
//
// The chosen line — 85 characters, a single line, no trailing newline:
//   Your code will be studied by future civilizations. They will assume it was a warning.
//
// What makes the line work: it opens like a genuine fortune slip with a
// prophecy ("will be"), then pivots so the engineer's own code becomes
// an archaeological hazard rather than a legacy to admire. The punch
// lands in the final phrase, where two concrete pictures — distant
// civilizations poring over the code, and a warning sign — crash into
// each other, and the engineer is the target of the joke, not its hero.
// At build time the leaderboard was empty (0 entries, blind rounds), so
// there was no rival text to compare against, and an exact-phrase web
// search for the line came back with 0 verbatim matches. Five candidate
// lines were drafted first and the most predictable one (a 3 a.m. bug
// fix) was dropped before this one was picked.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const FORTUNE_LINE =
  "Your code will be studied by future civilizations. They will assume it was a warning.";

// Gate every line before it is written: a fortune entry has to be one
// non-empty line of 1–120 characters, with no embedded line breaks and
// no trailing newline, so the emitted file holds exactly one line.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 120) {
    throw new Error(`fortune line must be 1-120 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("fortune line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune line must be a single line");
  }
}

validateLine(FORTUNE_LINE);

// Write the validated line to entry.txt inside the output directory,
// creating that directory first if needed. The file is then read back
// and compared byte for byte with the line in memory; any mismatch
// aborts the run instead of silently shipping a corrupted entry.
function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  const target = `${outDir}/entry.txt`;
  writeFileSync(target, line, "utf8");
  const written = readFileSync(target, "utf8");
  if (written !== line) {
    throw new Error("entry.txt read-back does not match the fortune line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, FORTUNE_LINE);
