const { Deta } = require("deta")

const deta = Deta(process.env.DETA_PROJECT_KEY)

const db = deta.Base("bilhetes")

module.exports = db