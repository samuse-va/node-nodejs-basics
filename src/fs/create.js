import fs from "fs";
export const create = async () => {
  try {
    await fs.promises.writeFile("./fresh.txt", "I am fresh and young");
  } catch (error) {
    console.error("FS operation failed");
  }
};
create();
