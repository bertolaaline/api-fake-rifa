const { Deta } = require("deta")

const deta = Deta("b0vkvq0z_7hyNZmJQCsYWsyBVooppeT99T9qYapM9")

const db = deta.Base("bilhetes")

const quantidadeDeBilhetes = 100

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
    // bilhetes.push(bilhete)
    db.put(bilhete)
  }
}

geraBilhetes()