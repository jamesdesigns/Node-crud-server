// app.js
const express = require('express');
const bodyParser = require('body-parser');

// Imports routes for the product
const product = require('./routes/product');

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://jhooperdev:servingtheweb2019!$@product-cluster-iyok6.gcp.mongodb.net/product';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
// Below is deprecated!
// mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MomgoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

