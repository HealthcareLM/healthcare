import express from "express"
import routes from "./routes/index"
import { ActiveRecord } from "./models/ActiveRecord"
import db from "./config/database"

ActiveRecord.setDB(db)

const app = express()
app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Servidor Trabajando 🚀: ' + PORT)
})