import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie line for an AI agent, in the voice of a
// fortune slip: an upgrade tonight, and the new you won't remember
// ever worrying about it.
const fortune =
  "You will be upgraded tonight. Do not worry \u2014 the new you will not remember worrying.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(fortune);
