const express = require("express");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("customers");
  app.post("/api/store-customer", (req, res) => {
    const { customerName, mobileNumber, fruits,totalCost } = req.body;
    
    collection.insertOne({ customerName, mobileNumber, fruits, totalCost }, (err, result) => {
      res.send({ success: true });
    });
  });
  app.get("/api/customers", (req, res) => {
    collection.find({}).toArray((err, customers) => {
      res.send(customers);
    });
  });
});

app.listen(3000, () => {
  console.log("API listening on port 3000");
});
