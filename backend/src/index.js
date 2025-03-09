import express from 'express'
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT 
const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello");
},
)
app.use("/api/auth", authRoutes)
app.use(cookieParser());

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
    connectDB();
})