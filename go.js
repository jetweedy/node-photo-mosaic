const fs = require("fs");
const { exec } = require("child_process");

var args = process.argv;
if (args.length > 2) {
    var img = args[2];
    var x = "node mosaic.js " + img + " images";
    console.log(x);
    exec(x, (error, stdout, stderr) => {
        console.log(stdout);
    });
}
