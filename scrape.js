const request = require('request');
const cheerio = require('cheerio');

request('https://en.wikipedia.org/wiki/Harry_Potter', function (error, response, html) {
if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('p').each(function(i, element){
    const a = $(this).next();
    console.log(a.text());
    console.log('p')
    });
}
});