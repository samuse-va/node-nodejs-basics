import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const file = await fs.promises.readFile("./files/fileToRead.txt", "utf-8");
  console.log(file);
};
read();
