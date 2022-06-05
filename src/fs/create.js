import fs from "fs";
export const create = async () => {
  try {
    // await fs.promises.access("./fresh.txt");
    // console.log("access");
    await fs.promises.writeFile("./fresh.txt", "I am fresh and young");
    // if (file == undefined) {
    //   console.error("FS operation failed");
    //   // const error = new Error("FS operation failed");
    //   // throw error;
    // } else {
    //   await fs.promises.writeFile("./fresh.txt", "I am fresh and young");
    // }
  } catch (error) {
    console.error("FS operation failed");
  }
  // finally {
  //   await fs.promises.writeFile("./fresh.txt", "I am fresh and young");
  // }
};
create();
