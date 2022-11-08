import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const writeStream = fs.createWriteStream(
    __dirname + "/files/fileToWrite.txt"
  );
  process.stdin.pipe(writeStream);

  // так тоже можно, вместо pipe:

  // process.stdin.on("data", (chunk) => {
  //   writeStream.write(chunk.toString());
  // });

  console.log("Write anything to console...\n");
};

write();
