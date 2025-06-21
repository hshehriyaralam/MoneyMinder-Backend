import {Transactions} from '../Models/transactions.model.js'



const addTransactios = async (req,res) => {
    try{
        const {type,category,amount,description,date,time} = req.body
        const userId = req.user._id


        const newTransaction = new Transactions({
            userId,
            type,
            category,
            amount,
            description,
            date,
            time,
        })

        await newTransaction.save()

        res.status(201).json({
            success : true,
            message : "Transactions Add Successfully",
            data :newTransaction
        })
    }catch(error){
        console.log("Add Transaction Failed ",error.message);
        res.status(500).json({
            success : false,
            message : 'Server Error while add Transactions'
        })
        
    }
}



export {addTransactios}