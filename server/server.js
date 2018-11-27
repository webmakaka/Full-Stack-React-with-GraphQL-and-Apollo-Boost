const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config({
  path: 'variables.env'
});

const Recipe = require('./models/Recipe');
const User = require('./models/User');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => console.log(err));

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
