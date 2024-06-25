const { readFile, writeFile, existsSync, mkdirSync } = require("fs");

console.log("at start");

// Ensure the temporary directory exists
if (!existsSync("./temporary")) {
  mkdirSync("./temporary");
}

writeFile("./temporary/fileB.txt", "This is line 1\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(
      "./temporary/fileB.txt",
      "This is line 2\n",
      { flag: "a" },
      (err) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          writeFile(
            "./temporary/fileB.txt",
            "This is line 3\n",
            { flag: "a" },
            (err) => {
              console.log("at point 3");
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log("All lines written successfully");

                readFile("./temporary/fileB.txt", "utf8", (err, data) => {
                  if (err) {
                    console.log("Error reading file: ", err);
                  } else {
                    console.log("File contents:");
                    console.log(data);
                  }
                });
              }
            }
          );
        }
      }
    );
  }
});

console.log("at end");
