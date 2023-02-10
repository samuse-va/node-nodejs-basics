import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const readStream = fs.createReadStream(
    __dirname + "/files/fileToCompress.txt"
  );
  const writeStream = fs.createWriteStream(__dirname + "/files/archive.gz");
  const toGz = zlib.createGzip();

  readStream.pipe(toGz).pipe(writeStream);
};

compress();
