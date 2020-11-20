//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
if (args.length > 2) {
    mosaic.mosaic( 
      args[2],
      'images',
      10, 
      10,
    );
} else {
    console.log("Please provide source image.");
}
