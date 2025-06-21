import { Transactions } from "../Models/transactions.model.js";



const EditTransactions = async (req,res)  => {
    try{
        const { id } = req.params;
        const {type,category,amount,description,date,time} = req.body;
        const userId = req.user._id
        
        const updatetransaction = await Transactions.findOneAndUpdate(
            { _id : id, userId},
            {type, category, amount, description , date, time},
            { new : true }
        )

        if(!updatetransaction){
            return res.status(404).json({
                success : true,
                message : "Transaction Not Found"
            })
        }

        res.status(200).json({
            success :true,
            data : updatetransaction,
            message : "Transaction Successfully Updated"
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : "server error in Update Traansaction"
        })
    }
}


export {EditTransactions}