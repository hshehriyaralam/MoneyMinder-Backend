import {User} from "../Models/user.model.js"
import {Transactions} from '../Models/transactions.model.js'


const deleteAccount = async (req,res) => {
    try{
        const userId = req.user._id;
        const deleteUser = await User.findByIdAndDelete(userId)
        if(!deleteUser){
            return res.status(404).json({message : "User Not Found"})
        }
        await Transactions.deleteMany({userId})
        res.clearCookie("token")
        res.status(200).json({message : "Account Successfully Delete"})
    }catch(error){
        console.log("Delete user failed",error.message);
        res.status(500).json({message : "Delete User Internal Server Error"})
    }
}
export {deleteAccount}

