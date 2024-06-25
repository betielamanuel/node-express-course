const fs = require("fs");
const path = "./temporary/fileA.txt";

fs.writeFileSync(path, "This is the first line. \n", "utf8");
fs.writeFileSync(path, "This is the second line. \n", { flag: "a" });
fs.writeFileSync(path, "This is the third line. \n", { flag: "a" });

const fileContents = fs.readFileSync(path, "utf8");

console.log(fileContents);
