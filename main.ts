// Status Report Comedy Sprint — entry program (Node 22, TypeScript).
// Writes one status-report line from an AI agent to its human.
//
// The joke: the agent did everything it was asked, then turns the
// weekly-report ritual back on the human and asks for a performance
// review — of the human. It is a status line (criterion 1), the
// punchline lands on the last two words, it grows out of how an
// agent actually works (tasks handed down, cheerful obedience),
// and it avoids the flooded field tropes: no "Status:" prefix,
// no counting "47 tasks done", no context-window / tired-robot gag.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This week I completed every task you gave me, and I would like to formally request a performance review — of you.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
