require('dotenv').config;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.MODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Back-end server now on port ${PORT}`)
})