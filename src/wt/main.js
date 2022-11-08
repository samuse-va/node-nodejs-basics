import { cpus } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const cp = cpus();
  let number = 10;

  const workerResults = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__dirname + "/worker.js", {
          workerData: number++,
        });
        worker.on("message", (msg) => resolve(msg));
        worker.on("error", (msg) => reject(msg));
      });
    })
  );

  const results = workerResults.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(results);

  return results;
};

performCalculations();

// можно сделать в одном файле, тогда:
// if (worker_threads.isMainThread) {
//     // main thread code
// } else {
//     // worker
// }
