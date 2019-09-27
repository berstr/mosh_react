
const express = require('express');
//import express, { static } from 'express';

const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW

const template = require("./../template");

app.use(express.static(DIST_DIR)); // NEW

app.get('/', (req, res) => {
    res.status(200).send(template.template());
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});