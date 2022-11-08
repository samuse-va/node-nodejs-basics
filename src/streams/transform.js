import { EOL } from "os";
import { pipeline, Transform } from "stream";

export const transform = async () => {
  const revert = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().replace(EOL, "").split("").reverse().join("") + EOL
      );
    },
  });
  pipeline(process.stdin, revert, process.stdout, (err) => {
    //...
  });
  console.log("Write anything to console...\n");
};

transform();
