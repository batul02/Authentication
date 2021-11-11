const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('We are on Login Page')
});

app.get('/signin', (req, res) => {
    res.send('We are on Signin Page')
});

app.listen(3000);