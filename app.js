import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.use(express.static("public"))
app.use(cookieParser())


app.get('/', (req,res) => {
    res.send("Home Routes")
})

import userRouter from "./src/Routes/userRoute.js"
import transactionRoutes from "./src/Routes/transacionsRoute.js"
app.use('/api/user',userRouter)
app.use('/api/transactions',transactionRoutes)

export {app}
