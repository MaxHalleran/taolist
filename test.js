const request = require('request');
const cheerio = require('cheerio');

let text;
// Prepares a document, representing the provided text

request('https://en.wikipedia.org/wiki/Harry_Potter', function (error, response, html) {
if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const txt = []
    $('p').each(function(i, elem){
    txt[i] = $(this).text()

    });
    txt.join(',')
    let text = (JSON.stringify(txt).replace(/[\W_]+/g," "))
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
      };
      console.log(document.content)
    }
});
