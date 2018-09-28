# Tao List Smart ToDo List v0.7.5

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information username and password are 'development' and database is taolistdb. port is 5432. You might have to create the database in psql before it can be accessed.
3. Install dependencies: `npm install`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- @google-cloud/language 1.2.0 or above
- bcrypt
- body-parser
- cookie-session
- ejs
- express
- knex
- node-sass-middleware
- PostgreSql

## Devlog

v0.7.5 - Delete functionality is implemented although not as smooth as possible. Fixed new user creation and database initialization. Item creation functionality implemented. Edit functionality is being implemented. Register and sign in form updated.

v 0.7.0 - Item creation is now added, users can add item to their todo lists and look through the items within their todo lists.

v0.6.1 - Added dummy options for the create an item field as well as attached the make an item function to the todolists themselves.

v0.5.0 - Taolist has a functioning database, user authentication, lists and item tracking. Auto categorizing of items is almost ready to be integrated.

v0.0.3 - Database helper functions created

v0.0.2 - Database skeleton constructed

v0.0.1 - File structure created

## Focus

 - Edit item functionality needs to be smoothed out, possible modal or hidden text. +0.1.0
 - Categorize function still needs to be implemented +0.1.0
 - Delete functionality needs to be smoothed out +0.0.5
 - Settings button should be removed +0.0.1
 - Header needs to be fixed (or buttons unfixed) +0.0.1
 - General CSS changes +0.1.0
 - Specific item descriptions +0.1.0
 - Interact with other apis, like amazon, yelp, fandango, etc. +1.0.0
