import express from "express"
import usuariosRouter from "./routes/UsuariosRoutes"
import db from "./config/database"


const app = express()
app.use(express.json())

app.use('/usuarios', usuariosRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Servidor Trabajando 🚀: ' + PORT)
})