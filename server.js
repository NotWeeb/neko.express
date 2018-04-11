const fs = require('fs')
const http = require('http')
const https = require('https')
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')
const forceSsl = require('express-force-ssl');


const express = require('express');
const app = express();

// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer({key, cert}, app);

httpServer.listen(80);
httpsServer.listen(443);

app.use(express.static('.well-known'))

app.use(forceSsl);

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/logo.png', (req, res) => {
  res.status(200).sendFile(__dirname + '/logo.png')
})

app.get('*', (req, res) => {
  res.status(404).send({error: 'Not Found'})
})