// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();



module.exports = {
 getWiki: function (txt) {
const document = {
 content: txt,
 type: 'PLAIN_TEXT',
};

client
.analyzeEntities({document: document})
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
};