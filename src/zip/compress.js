import fs from "fs";
import pipeline from "stream";
import zlib from "zlib";

export const compress = async () => {
  const gzip = await zlib.createGzip();
  const source = await fs.createReadStream(
    "./files/fileToCompress.txt",
    "utf-8"
  );

  const destination = await fs.createWriteStream("archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

compress();
