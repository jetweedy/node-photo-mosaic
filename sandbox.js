
//// npm install sharp
//// npm install replace-color
//// npm install image-thumbnail

const fs = require('fs');
const path = require('path');
const sharp = require('sharp')
const imageThumbnail = require('image-thumbnail');
const replaceColor = require('replace-color')


//// Manipulating colors of images

const tintImage = (source, target, t) => {
  sharp (source)
  .tint(t)
  .toFile(target)
}

const tintMyImage = (r,g,b) => {
    var source = './tarheels/original.png';
    var target = './tarheels/thumbs/r'+leadingZeros(r,3)+'g'+leadingZeros(g,3)+'b'+leadingZeros(b,3)+'.png';
    //console.log(source);
    //console.log(target);
    tintImage(source, target, {r: r, g: g, b: b}); 

}
    
function leadingZeros(s) {
    s = ""+s;
    while(s.length<3) {
        s = "0" + s;
    }
    return s;
}

//tintImage("./tarheels/original.png", "./tarheels/modified.png", {r: 255, g: 255, b: 255}); 

function repColor(source, from, to, target, callback) {

    replaceColor({
      image: source,
      colors: {
        type: 'hex',
        targetColor: from,
        replaceColor: to
      },
      deltaE: 20
    }, (err, jimpObject) => {
      if (err) return console.log(err)
      jimpObject.write(target, (err) => {
        if (err) return console.log(err)
      })
    }).then(callback);

}


if (false) {
    var hexnums = "0369CF";
    var n = 0;
    for (var i in hexnums) {
        for (var j in hexnums) {
            for (var k in hexnums) {
                var hex = ""+hexnums[i]+hexnums[i]+hexnums[j]+hexnums[j]+hexnums[k]+hexnums[k];
                console.log(++n, hex);
                repColor("./tarheels/original.png", "#ffffff", "#"+hex, "./tarheels/thumbs/"+hex+".png");
            }
        }
    }
}


if (false) {
    var hexnums = "0369CF";
    fs.readdir(path.join(__dirname, 'tarheels/thumbs'), function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            for (var i in hexnums) {
                var hex = ""+hexnums[i]+hexnums[i]+hexnums[i]+hexnums[i]+hexnums[i]+hexnums[i];
                repColor("./tarheels/thumbs/"+file, "#69a1c9", "#"+hex, "./tarheels/thumbs/"+hex+"_"+file);
            }
        });
    });

}




/*
//// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

*/


/*
sharp("./tarheels/original.png").grayscale().toFile("./tarheels/grayscale.png").then((x) => {
    tintImage("./tarheels/grayscale.png", "./tarheels/modified.png", {r: 255, g: 255, b: 255}); 
});
*/

/*

var interval = 30; // 51 17 3
for (var r=0;r<256;r+=interval) {
    for (var g=0;g<256;g+=interval) {
        for (var b=0;b<256;b+=interval) {
            r = Math.floor(r);
            g = Math.floor(g);
            b = Math.floor(b);
            tintMyImage(r,g,b);
        }
    }
}
tintMyImage(255,255,255);

*/


















/*
//// RENAMING EXTENTIONLESS FILES TO .jpg

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