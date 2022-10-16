import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  const previousName = __dirname + "/files/wrongFilename.txt";
  const nextName = __dirname + "/files/properFilename.md";

  try {
    await fs.promises.rename(previousName, nextName);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

rename();
