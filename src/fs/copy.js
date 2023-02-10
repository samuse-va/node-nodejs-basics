import fs from "fs";
import { copyFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const src = __dirname + "/files";
  const destination = __dirname + "/files_copy";

  try {
    await fs.promises.mkdir(destination);
    const files = await fs.promises.readdir(src);
    await Promise.all(
      files.map((f) => copyFile(`${src}/${f}`, `${destination}/${f}`))
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
