import fs from "fs";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Process } from "./processData.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

http
  .createServer((req, res) => {
    const throttle = new Process(500);
    const readStream = fs.createReadStream(`${__dirname}/data/numbers.txt`, {
      encoding: "UTF-8",
      highWaterMark: 25,
    });
    res.writeHead(200, { "Content-Type": "text/text" });
    readStream.pipe(throttle).pipe(res);
  })
  .listen(8000);
