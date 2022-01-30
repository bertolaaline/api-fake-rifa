const express = require("express")

const db = require("./db")

const app = express()

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API Rest Fake Rifa"
  })
})

app.get("/bilhetes", async (req,res) => {
  res.status(200).json({
    bilhetes: (await db.fetch()).items
  })
})

app.get("/bilhetes/:numero", async (req, res) => {
  const numeroDoBilhete = parseInt(req.params.numero)
  console.log(numeroDoBilhete)
  console.log((await db.fetch({"numero": numeroDoBilhete})))
  res.status(200).json({
    dadosDoBilhete: (await db.fetch({
      numero: numeroDoBilhete
    })).items
  })
})
module.exports = app