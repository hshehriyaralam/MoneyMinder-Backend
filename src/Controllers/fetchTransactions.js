import { Transactions } from "../Models/transactions.model.js";


const fetchTransactions = async (req,res) => {
    try{

        const userId = req.user._id;
        const transactions = await Transactions.find({ userId }).sort({ createdAt: -1 });

        res.status(200).json({
            success : true,
            count : transactions.length,
            data :transactions,
        })
    }catch(error){
        console.log("fetch Transactions Failed", error.message)
        res.status(500).json({
            success: false,
            message: "Server error while fetching transactions"
        })
    }
}




export {fetchTransactions}