const express = require("express")

const app = express()



app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "Hello World"
  })
})

app.get("/bilhetes", (req,res) => {
  res.status(200).json({
    bilhetes: []
  })
})

module.exports = app