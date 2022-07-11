import express from "express"
import dotenv from "dotenv"
import{ database } from "./config/database"
import router from "./routes/router"
import cors from "cors"


console.log(dotenv.config() ?  ".env corregado com sucesso" : "Falha ao carregar .env")


database()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})


