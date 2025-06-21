import express from 'express'
import {fetchTransactions} from "../Controllers/fetchTransactions.js"
import { authMiddleware } from '../Middleware/authMiddleware.js'
import { addTransactios } from '../Controllers/addTransactions.js'



const transactionRoutes = express.Router()



transactionRoutes.get('/fetch-amounts',  authMiddleware,fetchTransactions)
transactionRoutes.post('/add-amount',authMiddleware,addTransactios)




export default transactionRoutes