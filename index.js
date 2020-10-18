var express = require('express')
var birds = require("birds")

var app = express()
const port = 3000

app.use("/birds", birds)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})