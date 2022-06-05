import fs from "fs";

export const remove = async () => {
  await fs.promises.unlink("./files/fileToRemove.txt");
};
remove();
