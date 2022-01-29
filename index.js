const express = require("express")

const app = express()

let quantidadeDeBilhetes = 1000

const bilhetes = []

const varianteDeStatus = [
  "disponivel",
  "reservado",
  "vendido"
]

const sorteio = limite => Math.floor(Math.random() * limite)

const geraBilhetes = () => {
  for (let i = 0; i < quantidadeDeBilhetes; i++) {
    const bilhete = {
      numero: i + 1,
      status: varianteDeStatus[sorteio(varianteDeStatus.length)]
    }
    bilhetes.push(bilhete)
  }
}

geraBilhetes()

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "Hello World"
  })
})

app.get("/bilhetes", (req,res) => {
  res.status(200).json({
    bilhetes: bilhetes
  })
})

module.exports = app