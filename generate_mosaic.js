/*
node mosaic.js <image> <thumbsFolder> <tileWidth> <tileHeight> <numCols> <numRows>
Ratio of tile width/height should be inverse of cols/rows for a square image.
For example:
    node generate_mosaic.js 30somethingmoviepodcast.jpg movies1991 60 90 120 80
    node generate_mosaic.js 30somethingmoviepodcast.jpg movies1991 40 60 180 120
*/
//// https://www.npmjs.com/package/mosaic-node-generator
var mosaic = require('mosaic-node-generator');
var args = process.argv;
console.log(args);
if (args.length > 3) {
//    var s = parseInt(args[4]);
//    var sizeOf = require('image-size');
//    var dimensions = sizeOf(args[2]);
    mosaic.mosaic( 
      inputImagePath=args[2]
      , tilesDirectory=args[3]
      , cellWidth=parseInt(args[4])
      , cellHeight=parseInt(args[5])
      , columns=parseInt(args[6])
      , rows=parseInt(args[7])
    );
} else {
    console.log("Please provide an image file, a folder full of images to use as tiles, and a numeric tile size value.");
}
