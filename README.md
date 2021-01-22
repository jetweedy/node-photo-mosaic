# node-photo-mosaic

## References

https://www.npmjs.com/package/mosaic-node-generator

## Usage

Download this folder, enter it, and then...

```
$ npm install mosaic-node-generator
$ npm install image-size --save
$ node mosaic.js <sourceImage> <thumbsFolder> <tileHeightAndWidth> <numColsAndRows>
  e.g.
$ node mosaic.js <sourceImage> <thumbsFolder> 30 200
  (will result in a 6000 pixel wide image)
```

**Note:** For a 24" x 24" poster, I find that 60 or 80 is a good tile size (depending on how much definition you want) so that you can still see the tile images, but get a little more definition in the picture, as well. In that case, to get 7200 pixels (for a 300 dpi print), you'd want to make it 120 or 90 cols wide, respectively. Depending on your memory limits, this could take several minutes to process or it could max out your memory altogether. Make sure you have enough RAM if you're going to generate these, or else consider generating them in sections and stitching them together.

## To do

1. Set up on Heroku
1. Parse output from execution to get new image file
1. Read image and display in browser

