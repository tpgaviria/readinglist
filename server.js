const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/api-routes');
require('dotenv').config;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.MODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const mongoose = require('mongoose');
const mongoURL = process.env.PROD_MONGODB || 'mongodb://localhost:27017/readinglist';
mongoose.connect(mongoURL, { useNewUrlParser: true })
.then(() => console.log('connected to mongodb'))
.catch(err => console.log('error connecting to mongodb'));

    app.listen(PORT, () => {
        console.log(`Back-end server now on port ${PORT}`)
    })