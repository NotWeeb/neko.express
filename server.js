const express = require('express')
const fs = require('fs')
const https = require('https')
const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')
const https_options = {
    key: key,
    cert: cert
};
const PORT = 80;
const HOST = 'localhost';
const app = express()

app.use(app.router);

server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('app online %s:%s', HOST, PORT);


app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/logo.png', (req, res) => {
  res.status(200).sendFile(__dirname + '/logo.png')
})

app.get('*', (req, res) => {
  res.status(404).send({error: 'Not Found'})
})