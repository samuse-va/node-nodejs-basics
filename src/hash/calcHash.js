import crypto from "crypto";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  try {
    const fileContent = await fs.promises.readFile(
      __dirname + "/files/fileToCalculateHashFor.txt",
      "utf-8"
    );
    const hash = crypto.createHash("sha256");
    hash.update(fileContent);

    const hex = hash.digest("hex");
    console.log(hex);
  } catch (error) {
    throw error;
  }
};

calculateHash();
