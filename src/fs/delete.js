import fs from "fs";
import { getPathFromFiles } from "./getPathFromFiles.js";

export const remove = async () => {
  const src = getPathFromFiles(import.meta.url, "fileToRemove.txt");

  try {
    await fs.promises.unlink(src);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

remove();
