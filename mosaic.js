/*
# node mosaic.js <image> <thumbsFolder> <tileHeightAndWidth> <numColsAndRows>
*/
//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
if (args.length > 4) {
//    var s = parseInt(args[4]);
//    var sizeOf = require('image-size');
//    var dimensions = sizeOf(args[2]);
    mosaic.mosaic( 
      args[2],
      args[3],
      parseInt(args[4]),
      parseInt(args[4]),
      parseInt(args[5]),
      parseInt(args[5]),
    );
} else {
    console.log("Please provide an image file, a folder full of images to use as tiles, and a numeric tile size value.");
}