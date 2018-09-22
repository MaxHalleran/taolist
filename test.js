const request = require('request');
const cheerio = require('cheerio');

let text;
// Prepares a document, representing the provided text

request('https://en.wikipedia.org/wiki/Harry_Potter', function (error, response, html) {
if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('p').each(function(i, element){
    const text = $(this).next();
    console.log(text.text());
    });
}
});