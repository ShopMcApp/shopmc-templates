const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

require('dotenv').config()

const baseURL = process.env.BASE_URL
const session = process.env.SESSION
const template = process.env.TEMPLATE

app.get('/', async function (req, res) {
    const shop = await fetch(`${baseURL}/api/user/shop`, {
        headers: { 'Cookie': `session=${session}` }
    }).then(res => res.json())
    res.render(template, { shop });
});

app.listen(3000);
console.log('Server is listening on port 3000');