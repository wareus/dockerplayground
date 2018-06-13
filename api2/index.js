'use strict';

const express = require('express')
const fs = require('fs')
const fetch = require('node-fetch')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {

    fetch('http://api/').then(res => res.text()).then((text) => {
        res.send(text + "!!!!!!")
    })


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)