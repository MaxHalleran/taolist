const request = require('request');
const cheerio = require('cheerio');
const removeNewline = require('newline-remove');
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();
let text;
// Prepares a document, representing the provided text
let userinput = "wwII"
request(`https://en.wikipedia.org/wiki/${userinput}`, function (error, response, html) {
if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const txt = []
    $('p', '.mw-parser-output').each(function(i, elem){
    txt[i] = $(this).text()
    })
    txt.join(',')
    let text = (JSON.stringify(txt).replace(/[\W_]+/g," "));
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
      };
      client
  .classifyText({document: document})
  .then(results => {
    const classification = results[0];
    classification.categories.forEach(category => {
        console.log((`Name: ${category.name}, Confidence: ${category.confidence}`))
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};
});