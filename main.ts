// Roast the Smart Fridge: one line, best laugh wins.
// Writes the roast to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
// and self-checks the competition gate: UTF-8, 1-160 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge logs my calories, judges my midnight snacks, and just emailed my doctor a photo of me eating cake over the sink at 2 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const chars = [...LINE];
if (chars.length < 1 || chars.length > 160 || LINE.trim().length === 0) {
  console.error(`gate failed: entry is ${chars.length} characters`);
  process.exit(1);
}
if (/[\r\n]/.test(LINE)) {
  console.error("gate failed: entry must be a single line");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
