import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst AI Advice: the worst possible advice an AI could give,
// delivered in a calm, confident assistant voice.
const LINE =
  "To fix the bug, simply delete the error handling \u2014 no errors, no problem.";

// The gate requires 1 to 140 characters of UTF-8 text, a single line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry must be 1-140 chars, one line (got ${LINE.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
// No trailing newline: the file holds exactly the line, nothing else.

