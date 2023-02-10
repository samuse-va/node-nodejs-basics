import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const readStream = fs.createReadStream(
    __dirname + "/files/fileToRead.txt",
    "utf-8"
  );
  readStream.pipe(process.stdout);

  // так тоже можно, вместо pipe:

  // readStream.on("data", (chunk) => {
  //   process.stdout.write(chunk);
  // });
};

read();
