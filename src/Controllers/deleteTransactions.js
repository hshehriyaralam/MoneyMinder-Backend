import {Transactions} from "../Models/transactions.model.js"


const deleteTransactions  = async (req,res) => {
    try{
        const { id } = req.params;
        const userId = req.user._id;
        const tarnsactionDelete = await Transactions.findOneAndDelete({ _id :id, userId})
        if(!tarnsactionDelete){
            return res.status(404).json({
                success : false,
                message: "Transaction not found or unauthorized",
            })
        }

        res.status(200).json({
            success : true,
            message : "Transaction Successfully Deleted",
            data :tarnsactionDelete
        })
    }catch(error){
        console.error("Delete Transaction Error:", error.message);
        res.status(500).json({
            success : true,
            message : "Server Error in Delete Transactions"
        })
    }
}

export {deleteTransactions}


