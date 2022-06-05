import fs from "fs";

export const rename = async () => {
  await fs.promises.rename(
    "files/wrongFilename.txt",
    "files/properFilename.md"
  );
};
rename();
