require('dotenv').config()
const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

const customer = process.env.CUSTOMER
const baseURL = process.env.BASE_URL
const template = process.env.TEMPLATE

app.get('/', async function (req, res) {
    const data = await fetch(`${baseURL}/api/shop/${customer}`).then(res => res.json())
    res.render(template, { shop: data });
});

app.listen(3000);
console.log('Server is listening on port 3000');