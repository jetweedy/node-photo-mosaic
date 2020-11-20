//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
if (args.length > 4) {

    var s = parseInt(args[4]);
    var sizeOf = require('image-size');
    var dimensions = sizeOf(args[2]);

    mosaic.mosaic( 
      args[2],
      args[3],
      s,
      s,
    );

} else {
    console.log("Please provide source image.");
}
