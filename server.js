const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config;
require('./routes/api-routes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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