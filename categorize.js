const request = require('request');
const cheerio = require('cheerio');
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

// Prepares a document, representing the provided text
let userinput = 'Harry Potter'
module.exports = function categorizeStuff(userinput){
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
        output = (`|| Name: ${category.name}, Confidence: ${category.confidence}`)
        if(output.includes('/Food & Drink')){
          return ('Food')
        } else if (output.includes("/Arts & Entertainment")){
          return ('Watch')
        } else if (output.includes("/Autos & Vehicles")){
          return ('Buy')
        } else if (output.includes("/Books & Literature")){
          return('Read')
        } else if (output.includes("/Beauty & Fitness")){
          return ('Buy')
        } else if (output.includes("/Business & Industrial")){
          return ("Other")
        } else if (output.includes("/Computers & Electronics")){
          return ('Buy')
        } else if (output.includes("/Finance")){
          return ('Other')
        } else if (output.includes("/Games")){
          return ("Buy")
        } else if (output.includes("/Health")){
          return ("Other")
        } else if (output.includes("/Hobbies & Leisure")){
          return ("Other")
        } else if (output.includes("/Home & Garden")){
          return ("Buy")
        } else if (output.includes("/Internet & Telecom")){
          return ("Other")
        } else if (output.includes("/Jobs & Education")){
          return ("Other")
        } else if (output.includes("/Law & Government")){
          return ("Other")
        } else if (output.includes("/News")){
          return ("Watch")
        } else if (output.includes("/Online Communities")){
          return ("Other")
        } else if (output.includes("/People & Society")){
          return ("Other")
        } else if (output.includes("/Pets & Animals")){
          return ("Buy")
        } else if (output.includes("/Real Estate")){
          return ("Other")
        } else if (output.includes("/Reference")){
          return ("Read")
        } else if (output.includes("/Science")){
          return ("Other")
        } else if (output.includes("/Sensitive Subjects")){
          return ("Other")
        } else if (output.includes("/Shopping")){
          return ("Buy")
        } else if (output.includes("/Sports")){
          return ("Other")
        } else if (output.includes("/Travel")){
          return ("Other")
        } else {
          return ("Naughty Naughty")
        }
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
};
});
}
