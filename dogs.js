
const puppeteer = require('puppeteer');
const fs = require("fs");
const { Parser } = require('json2csv');
const parser = new Parser();
const request = require('request');

var download = async (n, uri, callback) => {
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream("images/"+n+".jpg")).on('close', callback);
  });
};



var autoScroll = async (page) => {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 200;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


var scrapeDogs = async (browser, p) => {
    let page = await browser.newPage();
    await page.goto("https://www.petfinder.com/search/dogs-for-adoption/us/nc/chapel-hill/?distance=Anywhere&page="+p);
    await autoScroll(page);
    var data = await page.evaluate(() => {
        var r = [];
        var x = document.querySelectorAll(".petCard-media-img");
        for (var i in x) {
//            r.push(typeof x[i]);
            if (typeof x[i] == "object") {
                r.push(x[i].src);
            }
        }
//        console.log(r);
        return r;
    });
    for (var d in data) {
//        console.log(data[d]);
        await download(p+"_"+d, data[d], function(){});
    }
}

var go = async () => {
    let browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    for (var i=21; i<=25; i++) {
        await scrapeDogs(browser, i);
    }
    browser.close();
}

go();

/*

// http://p2c.wakeso.net/jailinmates.aspx
if (process.argv.length > 2) {
    jail_id = process.argv[2];
    url = process.argv[3];
    scrape(jail_id, url);
}

*/