/* eslint-disable */

const request = require('request-promise');
const cheerio = require('cheerio');
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

// Prepares a document, representing the provided text
const userinput = 'Boston Pizza'

module.exports = function categorize(userInput, uniq) {
  return {

    /** categorizeThis
    * takes a user input and an empty array and returns the array filled with unique values specifying which category the item belongs to
    * @param {String}userinput the string searched by the user
    * @param {Array}uniq takes an empty array to return filled with values
    */
    categorizeThis: function categorizeThis(userinput, uniq) {
      return request(`https://en.wikipedia.org/wiki/${userinput}`, function (error, response, html) {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const txt = []
          $('p', '.mw-parser-output').each(function (i, elem) {
            txt[i] = $(this).text()
          })
        txt.join(',')
        let text = (JSON.stringify(txt).replace(/[\W_]+/g, " "));
        const document = {
          content: text,
          type: 'PLAIN_TEXT',
        };
        client
        .classifyText({
          document: document
        })
        .then(results => {
          const classification = results[0];
          let outarray =[];
          classification.categories.forEach(category => {
            output = (`|| Name: ${category.name}, Confidence: ${category.confidence}`)
            if (output.includes('/Food & Drink')) {
              outarray.push('Food')
            } else if (output.includes("/Arts & Entertainment")) {
              outarray.push('Movie')
            } else if (output.includes("/Autos & Vehicles")) {
              outarray.push('Buy')
            } else if (output.includes("/Books & Literature")) {
              outarray.push('Book')
            } else if (output.includes("/Beauty & Fitness")) {
              outarray.push('Buy')
            } else if (output.includes("/Business & Industrial")) {
              outarray.push("Other")
            } else if (output.includes("/Computers & Electronics")) {
              outarray.push('Buy')
            } else if (output.includes("/Finance")) {
              outarray.push('Other')
            } else if (output.includes("/Games")) {
              outarray.push("Buy")
            } else if (output.includes("/Health")) {
              outarray.push("Other")
            } else if (output.includes("/Hobbies & Leisure")) {
              outarray.push("Other")
            } else if (output.includes("/Home & Garden")) {
              outarray.push("Buy")
            } else if (output.includes("/Internet & Telecom")) {
              outarray.push("Other")
            } else if (output.includes("/Jobs & Education")) {
              outarray.push("Other")
            } else if (output.includes("/Law & Government")) {
              outarray.push("Other")
            } else if (output.includes("/News")) {
              outarray.push("Movie")
            } else if (output.includes("/Online Communities")) {
              outarray.push("Other")
            } else if (output.includes("/People & Society")) {
              outarray.push("Other")
            } else if (output.includes("/Pets & Animals")) {
              outarray.push("Buy")
            } else if (output.includes("/Real Estate")) {
              outarray.push("Other")
            } else if (output.includes("/Reference")) {
              outarray.push("Book")
            } else if (output.includes("/Science")) {
              outarray.push("Other")
            } else if (output.includes("/Sensitive Subjects")) {
              outarray.push("Other")
            } else if (output.includes("/Shopping")) {
              outarray.push("Buy")
            } else if (output.includes("/Sports")) {
              outarray.push("Other")
            } else if (output.includes("/Travel")) {
              outarray.push("Other")
            } else {
              outarray.push("Naughty Naughty")
            }
          });
          let uniq = [...new Set(outarray)];
          let sorted = uniq.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
                return 0;
              });
              console.log('inside categorize: ', uniq)
              return uniq;
            })
            .catch(err => {
              console.error('ERROR:', err);
            });
        }
      })
      .then(() => {
        console.log('at the end of request');
      })
    }
  }
};
