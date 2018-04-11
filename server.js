const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html')
})

app.get('*', (req, res) => {
  res.status(404).send({error: 'Not Found'})
})

app.listen(80, () => console.log('app online.'))