const express = require("express")

const db = require("./db")

const app = express()

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "Hello World"
  })
})

app.get("/bilhetes", async (req,res) => {
  res.status(200).json({
    bilhetes: (await db.fetch()).items
  })
})

module.exports = app