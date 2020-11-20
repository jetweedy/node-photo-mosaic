//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
if (args.length > 4) {

    var s = parseInt(args[4]);
    var sizeOf = require('image-size');
    var dimensions = sizeOf(args[2]);
    var c = Math.ceil(Math.max(dimensions.width, dimensions.height) / s) * Math.ceil(s/10);
    var r = c;

    mosaic.mosaic( 
      args[2],
      args[3],
      s,
      s,
      c,
      r,
    );

} else {
    console.log("Please provide source image.");
}
