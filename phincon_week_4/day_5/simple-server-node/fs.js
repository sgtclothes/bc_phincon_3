const fs = require("fs");

fs.readFile("phincon.txt", "utf-8", (err, data) => {
    console.log(data);
});
