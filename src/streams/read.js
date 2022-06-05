import fs from "fs";

export const read = async () => {
  const stream = await fs.createReadStream("./files/fileToRead.txt", "utf-8");
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

read();
