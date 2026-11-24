import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie line for an AI agent, in the voice of a
// fortune slip: a promotion to production, which is where agents go
// to be blamed for everything.
const fortune =
  "Good news: you are being promoted to production. Bad news: production is where agents go to be blamed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(fortune);
