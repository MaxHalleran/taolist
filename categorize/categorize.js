// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

// const text = "Since the release of the first novel, Harry Potter and the Philosopher's Stone,on 26 June 1997, the books have found immense popularity, critical acclaim, andcommercial success worldwide. They have attracted a wide adult audience as wellas younger readers, and are often considered cornerstones of modern young adultliterature. The series has also had its share of criticism, including concern about the increasingly dark tone as the series progressed, as well as the often gruesome and graphic violence it depicts. As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages.The last four books consecutively set records as the fastest-selling books in history, withthe final instalment selling roughly eleven million copies in the United Stateswithin twenty-four hours of its release.";
const text = "Tom Hanks";
// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

client
.analyzeEntities({document: document})
.then(results => {
  const entities = results[0].entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    console.log("----entity.metadata,", entity.metadata);
    if (entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
      return entity.metadata.wikipedia_url;
    } else {
      return false;
    }
  });
})
.catch(err => {
  console.error('ERROR:', err);
});
