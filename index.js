var express = require('express')
var accounts = require('./accounts')

var app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send("hello world")
})

app.use("/accounts", accounts)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})