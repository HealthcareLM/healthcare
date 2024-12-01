import express from "express"
import usuariosRouter from "./routes/UsuariosRoutes"
import citasRouter from "./routes/CitasRoutes";
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

app.use('/usuarios', usuariosRouter)
app.use('/citas', citasRouter);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Servidor Trabajando 🚀: ' + PORT)
})