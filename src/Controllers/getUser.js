import {User} from "../Models/user.model.js"

const fetchUser = async (req,res) => {
    try{
     res.status(200).json({
        message : "user Fetch Successfully",
        success : true,
        user : req.user
    })
}catch(error){
     console.log("User failed",error.message);
         res.status(404).json({
           message : "User not found in Fetch User"
        })
}
}




export {fetchUser}