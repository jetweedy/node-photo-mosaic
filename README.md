# node-photo-mosaic

## References

https://www.npmjs.com/package/mosaic-node-generator

## Usage

Download this folder, enter it, and then...

```
$ npm install mosaic-node-generator -g
$ npm install image-size --save
$ node mosaic.js <sourceImage> <thumbsFolder> <tileHeightAndWidth> <numColsAndRows>
  e.g.
$ node mosaic.js <sourceImage> <thumbsFolder> 30 200
  (will result in a 6000 pixel wide image)
```

## To do

1. Set up on Heroku
1. Parse output from execution to get new image file
1. Read image and display in browser

