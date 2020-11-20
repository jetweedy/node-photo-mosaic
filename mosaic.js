//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
if (args.length > 4) {
    mosaic.mosaic( 
      args[2],
      args[3],
      parseInt(args[4]),
      parseInt(args[4]),
    );
} else {
    console.log("Please provide source image.");
}
