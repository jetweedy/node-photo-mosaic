
//// Manipulating colors of images
//// npm install sharp

const testFolder = './tarheels/';
const fs = require('fs');
const imageThumbnail = require('image-thumbnail');
const sharp = require('sharp')


const tintImage = (source, target, t) => {
  sharp (source)
  .tint(t)
  .toFile(target)
}

function leadingZeros(s) {
    s = ""+s;
    while(s.length<3) {
        s = "0" + s;
    }
    return s;
}

var r = 0;
var g = 0; // to 255
var b = 0;
var interval = 17;
for (var r=0;r<256;r+=interval) {
    for (var g=0;g<256;g+=interval) {
        for (var b=0;b<256;b+=interval) {    
            var source = './tarheels/original.png';
            var target = './tarheels/thumbs/r'+leadingZeros(r,3)+'g'+leadingZeros(g,3)+'b'+leadingZeros(b,3)+'.png';
            //console.log(source);
            //console.log(target);
            tintImage(source, target, {r: r, g: g, b: b}); 
        }
    }
}







/*
//// RENAMING EXTENTIONLESS FILES TO .jpg

const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, 'dog_thumbs'), function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var oldfile = path.join(__dirname, 'dog_thumbs', file);
        if ( oldfile.indexOf(".jpg")<0 && oldfile.indexOf(".png")<0 ) {
            var newfile = oldfile + ".jpg";
            console.log(oldfile);
            console.log(newfile);        
            fs.rename(oldfile, newfile, function(err) { if ( err ) console.log('ERROR: ' + err); });
        }
    });
});

*/