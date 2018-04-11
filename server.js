const fs = require('fs')
const http = require('http')
const path = require('path')


const express = require('express');
const app = express();

const httpServer = http.createServer(app);

httpServer.listen(80);

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/logo.png', (req, res) => {
  res.status(200).sendFile(__dirname + '/logo.png')
})

app.get('*', (req, res) => {
  res.status(404).send({error: 'Not Found'})
})