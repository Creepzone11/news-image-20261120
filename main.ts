// main.ts — The World Today, Friday 20 November 2026.
// Node 22, standard library only. Loads the finished front page
// (entry.png, drawn by draw_v5.py) and places it in the grader
// output directory. No network; the same bytes every run.
import fs from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = new URL("./entry.png", import.meta.url);
const png = fs.readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(pngMagic)) throw new Error("entry.png is not a PNG");
fs.mkdirSync(outDir, { recursive: true });
const target = path.join(outDir, "entry.png");
fs.writeFileSync(target, png);
const written = fs.statSync(target).size;
console.log("wrote", target, written, "bytes");
