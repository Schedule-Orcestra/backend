import express from "express"
import dotenv from "dotenv"
import{ database } from "./config/database"
const erro = dotenv.config()
console.log(erro ? "Falha ao carregar .env" : ".env corregado com sucesso")

database()

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port 5000`)
  })


