import express from 'express'
import {fetchTransactions} from "../Controllers/fetchTransactions.js"
import { authMiddleware } from '../Middleware/authMiddleware.js'
import { addTransactios } from '../Controllers/addTransactions.js'
import {deleteTransactions} from "../Controllers/deleteTransactions.js"
import {EditTransactions} from "../Controllers/editTransactions.js"



const transactionRoutes = express.Router()



transactionRoutes.get('/fetch-amounts',  authMiddleware,fetchTransactions)
transactionRoutes.post('/add-amount',authMiddleware,addTransactios)
transactionRoutes.delete('/delete/:id', authMiddleware,deleteTransactions)
transactionRoutes.put('/edit/:id', authMiddleware, EditTransactions)




export default transactionRoutes