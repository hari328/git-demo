var express = require("express")
var accountsRouter = express.Router()

accountsRouter.get("/", function(req, res) {
  res.send([{"id": 1,"name": "crow"},{"id": 2, "name": "eagle"}])
})

accountsRouter.post("/", function(req, res) {
  res.send(200)
})

module.exports = accountsRouter