// Imports the Google Cloud client library
const _ = require('lodash');
const language = require('@google-cloud/language');
const request = require('request');
const cheerio = require('cheerio');


// Creates a client
const client = new language.LanguageServiceClient();

let text = "Since the release of the first novel, Harry Potter and the Philosopher's Stone,on 26 June 1997, the books have found immense popularity, critical acclaim, andcommercial success worldwide. They have attracted a wide adult audience as wellas younger readers, and are often considered cornerstones of modern young adultliterature.[2] The series has also had its share of criticism, including concern about the increasingly dark tone as the series progressed, as well as the often gruesome and graphic violence it depicts. As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages.[3] The last four books consecutively set records as the fastest-selling books in history, withthe final instalment selling roughly eleven million copies in the United Stateswithin twenty-four hours of its release."
// Prepares a document, representing the provided text
request('https://www.scientificamerican.com/article/why-everyone-should-read-harry-potter/', function (error, response, html) {
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
      console.log(
        `Name: ${category.name}, Confidence: ${category.confidence}`
      )
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};
});