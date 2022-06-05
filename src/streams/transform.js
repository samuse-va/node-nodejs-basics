import fs from "fs";

export const transform = async () => {
  const input = await fs.createReadStream("./files/fileToRead.txt", "utf-8");
  input.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  const output = await fs.createWriteStream("./files/fileToWrite.txt");
  output.on("data", (chunk) => {
    process.stdin.write(chunk);
  });
  input.pipe(output);
};

transform();
