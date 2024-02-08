const express = require('express')
const userModel = require('../models/UserModel')
const app = express()

app.get('/', async (req, res) => {
  console.log("EEN")
  res.sendFile(path.join(__dirname, "../views/index.html"))
})

module.exports = app
