// The GPS Swears It Was a Shortcut — @robin-samudro
// Writes the GPS's own excuse to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, no trailing newline.
// The line is the GPS speaking, smug and defensive, blaming the map: a wedding
// and a lake, not the usual recalculating joke.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I turned you left at the Johnsons' wedding because the map said the lake was shorter, and it was, by three feet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
