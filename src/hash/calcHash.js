import crypto from "crypto";
import fs from "fs";

export const calculateHash = async () => {
  const file = await fs.promises.readFile(
    "./files/fileToCalculateHashFor.txt",
    "utf-8"
  );
  const hash = crypto.createHash("sha256");
  hash.update(file);

  const hex = hash.digest("hex");
  console.log(hex);
};

calculateHash();
