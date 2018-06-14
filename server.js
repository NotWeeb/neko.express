const fs = require('fs')
const http = require('http')
const path = require('path')
const https = require('https')
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')
const forceSsl = require('express-force-ssl');


const express = require('express');
const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer({key: key, cert: cert}, app);

httpServer.listen(80);
httpsServer.listen(443);

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/yeet.jpg', (req, res) => {
  res.status(200).sendFile(__dirname + '/yeet.jpg')
})

app.get('*', (req, res) => {
  res.status(404).send({error: 'Not Found'})
})