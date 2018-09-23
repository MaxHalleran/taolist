// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();




function getWiki (txt) {
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
     return entity.metadata.wikipedia_url;
   } else {
     return false;
   }
 });
})
.catch(err => {
 console.error('ERROR:', err);
});
}
