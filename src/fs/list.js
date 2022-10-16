import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const src = __dirname + "/files";

  try {
    const files = await fs.promises.readdir(src);
    console.log(files);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

list();
