import fs from "fs";
import { getPathFromFiles } from "./getPathFromFiles.js";

export const read = async () => {
  const src = getPathFromFiles(import.meta.url, "fileToRead.txt");

  try {
    const text = await fs.promises.readFile(src, "utf-8");
    console.log(text);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

read();
