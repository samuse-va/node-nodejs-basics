import fs from "fs";
import { getPathFromFiles } from "./getPathFromFiles.js";

export const create = async () => {
  const src = getPathFromFiles(import.meta.url, "fresh.txt");
  const text = "I am fresh and young";

  try {
    await fs.promises.writeFile(src, text, { flag: "wx" });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

create();
