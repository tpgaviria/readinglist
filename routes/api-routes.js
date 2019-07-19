const axios = require('axios');
const db = require('../models');
const path = require('path');
require('dotenv').config();

module.exports = function(app) {
    app.get('/api/books', (req, res) => {
        db.Book.find()
            .then(
                queryResults => res.json(queryResults))
            .catch(
                err => res.json(err))
    });

    app.post('/search', (req, res) => {
        let query = req.body.title.replace(/\s/g, '+');
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_KEY}`
        axios.get(URL)
            .then(res => res.json(res.data.items))
            .catch(err => res.json(err))
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../client/build/index.html'));
    // })


}