// Imports the Google Cloud client library
const _ = require('lodash');
const language = require('@google-cloud/language');
const request = require('request');
const cheerio = require('cheerio');

// Creates a client
const client = new language.LanguageServiceClient();


// Prepares a document, representing the provided text
function getCategory (txt) {
const document1 = {
 content: txt,
 type: 'PLAIN_TEXT',
};
client
.analyzeEntities({document: document1})
.then(results => {
 const entities = results[0].entities;
 entities.forEach(entity => {

   if (entity.metadata.wikipedia_url) {
request(entity.metadata.wikipedia_url, function (error, response, html) {
if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const txt = []
    $('p').each(function(i, elem){
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
      console.log
        (`Name: ${category.name}, Confidence: ${category.confidence}`)
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};
});
} else {
  return false;
}
});
})
.catch(err => {
console.error('ERROR:', err);
});
}

getCategory("Harry Potter")
