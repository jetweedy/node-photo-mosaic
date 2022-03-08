
const testFolder = './dogs/';
const fs = require('fs');


const imageThumbnail = require('image-thumbnail');

async function makeThumb(s, t, f) {
    const thumbnail = await imageThumbnail(s+"/"+f);
    console.log(thumbnail);
    await fs.writeFileSync(t+"/"+f, thumbnail);
    console.log(t+"/"+f);
}

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    try {
        makeThumb('dogs','dog_thumbs',file);
    } catch(er) {
        console.log("!!!-->failed to make: " + file);
    }
  });
});

/*
(async function() { 
    await makeThumb('dogs','dog_thumbs','saved_resource');
    console.log("Done.");
})();
*/