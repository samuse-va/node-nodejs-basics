export const parseEnv = () => {
  let arrOfArr = Object.entries(process.env).map(([key, value]) => [
    "RSS_" + key + "=",
    value,
  ]);
  let res = arrOfArr.map((b) => b.join("")).join(";");
  console.log(res);
};

parseEnv();
