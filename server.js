const express = require('express')
const db = require('./server/models/db')
const app = express();
const port = 3000;

// setup seed input
const seed = require('./server/models/seed/seed-db')

// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

// connect to DB then run server
// use force: true to drop tables first
// use seed.insert() to insert seed data
db.sequelize.sync({
  // force: true
})
.then( ()=>{
  // seed.insert()
})
.then( () =>{
  app.listen(port, () => {
    console.log('running server on port ' + port);
  })
})