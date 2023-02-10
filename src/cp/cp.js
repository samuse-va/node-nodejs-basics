import { spawn } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  let initiated = false;

  const chProcess = spawn(`node`, [
    `${__dirname}/files/script.js`,
    ...args.split(" "),
  ]);

  process.stdin.on("data", (msg) => {
    chProcess.stdin.write(msg);
  });
  chProcess.stdout.on("data", (data) => {
    console.log(data.toString());
    if (!initiated) {
      console.log("Write anything..." + "\n");
      initiated = true;
    }
  });
};

spawnChildProcess("--silent --all");
