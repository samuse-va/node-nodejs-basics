import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const writeStream = fs.createWriteStream(
    __dirname + "/files/fileToCompress.txt"
  );
  const readStream = fs.createReadStream(__dirname + "/files/archive.gz");
  const fromGz = zlib.createUnzip();

  readStream.pipe(fromGz).pipe(writeStream);
};

decompress();
