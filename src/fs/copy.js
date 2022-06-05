import fs from "fs";
import path from "path";

export const copy = async () => {
  await fs.promises.mkdir("./files_copy");
  const files = await fs.promises.readdir("./files");
  for (const file of Object.values(files)) {
    fs.promises.writeFile(path.join("./files_copy/", file), "");
    fs.promises.copyFile(
      path.join("./files/", file),
      path.join("./files_copy/", file)
    );
  }
};
copy();
