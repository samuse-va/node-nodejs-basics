export const parseArgs = (flag) => {
  //   console.log(process.argv.slice(2));
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
};
const message = parseArgs("-m");
console.log("m is " + message);
