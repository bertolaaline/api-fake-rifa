const { Deta } = require("deta")

const deta = Deta("b0vkvq0z_7hyNZmJQCsYWsyBVooppeT99T9qYapM9")

const db = deta.Base("bilhetes")

module.exports = db