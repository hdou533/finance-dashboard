import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import kpiRoutes from './routes/kpi.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use('/kip', kpiRoutes)
const PORT = process.env.PORT || 9000

mongoose
    .connect(process.env.MONGO_URL)
    .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch(error => console.error(`${error} did not connect`))
