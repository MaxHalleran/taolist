const request = require('request');
const cheerio = require('cheerio');
const language = require('@google-cloud/language');

const client = new language.LanguageServiceClient();

let text;
// Prepares a document, representing the provided text
let userinput = ["Pulp Fiction", "The Manchurian Candidate", "Taxi Driver", "45 Years", "The Man Who Shot Liberty Valance",
"Dunkirk", "Before Midnight", "WALL-E", "Faces Places", "A Separation", "Zero Dark Thirty", "Snow White and the Seven Dwarfs", "Double Idemnity",
"I Am Not Your Negro", "The Social Network", "The Grapes of Wrath", "Toy Story", "Carol", "Beauty and the Beast", "Spirited Away", "Gravity", "Mean Streets",
"A Streetcar Named Desire", "Ratatouille", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "The Maltese Falcon", "Rosemary's Baby",
"Manchester by the Sea", "12 Angry Men", "12 Years a Slave", "Ran", "American Graffiti", "Psycho", "Some Like It Hot", "4 Months, 3 Weeks and 2 Days",
"Gone With The Wind", "My Left Foot", "Hoop Dreams", "All About Eve", "North by Northwest", "Pan's Labyrinth", "Moonlight", "The Treasure of the Sierra Madre",
"Singin' In The Rain", "Three Colors: Red", "Boyhood", "Casablanca", "Rear Window", "The Godfather", "Citizen Kane"]
userinput.forEach(element => {
  //console.log(element)
  request(`https://en.wikipedia.org/wiki/${element}`, function (error, response, html) {
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
              console.log('Eat')
            } else if (output.includes("/Arts & Entertainment")){
              console.log('Watch')
            } else if (output.includes("/Autos & Vehicles")){
              console.log('Buy')
            } else if (output.includes("/Books & Literature")){
              console.log('Read')
            } else if (output.includes("/Beauty & Fitness")){
              console.log('Buy')
            } else if (output.includes("/Business & Industrial")){
              console.log("Other")
            } else if (output.includes("/Computers & Electronics")){
              console.log('Buy')
            } else if (output.includes("/Finance")){
              console.log('Other')
            } else if (output.includes("/Games")){
              console.log("Buy")
            } else if (output.includes("/Health")){
              console.log("Other")
            } else if (output.includes("/Hobbies & Leisure")){
              console.log("Other")
            } else if (output.includes("/Home & Garden")){
              console.log("Buy")
            } else if (output.includes("/Internet & Telecom")){
              console.log("Other")
            } else if (output.includes("/Jobs & Education")){
              console.log("Other")
            } else if (output.includes("/Law & Government")){
              console.log("Other")
            } else if (output.includes("/News")){
              console.log("Watch"),
              console.log("Read")
            } else if (output.includes("/Online Communities")){
              console.log("Other")
            } else if (output.includes("/People & Society")){
              console.log("Other")
            } else if (output.includes("/Pets & Animals")){
              console.log("Buy")
            } else if (output.includes("/Real Estate")){
              console.log("Other")
            } else if (output.includes("/Reference")){
              console.log("Read")
            } else if (output.includes("/Science")){
              console.log("Other")
            } else if (output.includes("/Sensitive Subjects")){
              console.log("Other")
            } else if (output.includes("/Shopping")){
              console.log("Buy")
            } else if (output.includes("/Sports")){
              console.log("Other")
            } else if (output.includes("/Travel")){
              console.log("Other")
            } else {
              console.log("Naughty Naughty")
            }
        });
      })
      .catch(err => {
        console.error('ERROR:');
      });
    };
  });
});