const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/banking_virtusa");

// Create a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create a model
const User = mongoose.model('User', userSchema);

// Use body-parser middleware
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save((err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(user);
    }
  });
});