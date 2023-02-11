const express = require('express');
const app = express();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';

const dbName = 'fruitDB';

const client = new mongodb.MongoClient(url);

client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection('fruits');

  app.post('/api/store-value', (req, res) => {
    console.log(req.body);
    collection.insertOne(req.body, function(err, result) {
      console.log("Inserted Successfully");
      res.send(result);
    });
  });

  app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
  });
});
