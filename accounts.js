var express = require("express")
var accountsRouter = express.Router()

accountsRouter.get("/", function(req, res) {
  res.send([{"id": 1,"name": "Harish"},{"id": 2, "name": "girish"}])
})

accountsRouter.post("/", function(req, res) {
  res.send(200)
})

module.exports = accountsRouter