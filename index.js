const express = require('express');
const fs = require('fs')
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/basic', function (req, res) {
    res.render('basic', JSON.parse(fs.readFileSync('./shop.json', 'utf8')));
});

app.listen(8080);
console.log('Server is listening on port 8080');