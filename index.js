const express = require('express');
const bodyParser = require('body-parser');

 require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');


const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

// Get all beers
app.get('/beers', (req,res)=> {
  knex('beers')
  // .select()
  .then(beers => {
    res.json(beers);
  });
});

// Get beer by id
app.get('/beer  /:id', function(req, res){
  knex('beers')
  .where('id', req.params.id)
  .first()
  .then(function(result){
    res.json(result);
  });
});

// Create new record
app.post('/beers', function(req, res){
  knex('beers')
  .insert({
    name: req.body.name,
    volume: req.body.volume,
    type: req.body.type,
    brewery: req.body.brewery
  }, 'id')
  .then(function(result){
    res.json(result);
  });
});

// Delete a beer
app.delete('/beer/:id', function(req, res){
  knex('beers')
  .where('id', req.params.id).del()
  .then(function(result){
    res.json(result);
  });

});
