require('dotenv').config()

const db = require("./db")

const limpar = async () => {
    const bilhetes = (await db.fetch()).items
    for(const bilhete of bilhetes) {
        db.delete(bilhete.key)
    }
}

limpar()