import fs from "fs";

export const write = async () => {
  const output = await fs.createWriteStream("./files/fileToWrite.txt");
  output.on("data", (chunk) => {
    process.stdin.write(chunk);
  });
};

write();
