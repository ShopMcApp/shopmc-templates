const express = require('express');
const fs = require('fs')
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/basic', function (req, res) {
    res.render('basic', JSON.parse(fs.readFileSync('./data.json', 'utf8')));
});

app.listen(3000);
console.log('Server is listening on port 3000');