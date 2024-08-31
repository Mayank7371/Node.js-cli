const fs = require("fs");
function main(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    total = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[index] === " ") {
        total++;
      }
    }
    console.log(total + 1);
  });
}
main(process.argv[2]);

// console.log(process.argv);
