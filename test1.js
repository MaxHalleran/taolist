const fetch = require('node-fetch');
const cheerio = require('cheerio');
const URL = 'https://en.wikipedia.org/wiki/Harry_Potter';


fetch(URL)
  .then(res => res.text())
  .then((p) => {
    $ = cheerio.load(p);
    $(p).each((index, element) => {
      console.log(element);
    });
  });