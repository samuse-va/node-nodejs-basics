export const parseArgs = (flag) => {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
};
const val = parseArgs("-propName");
const val2 = parseArgs("-prop2Name");
console.log("propName is " + val + ", prop2Name is " + val2);
