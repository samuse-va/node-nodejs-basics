import fs from "fs";
export const read = async () => {
  const file = await fs.promises.readFile("./files/fileToRead.txt", "utf-8");
  console.log(file);
};
read();
