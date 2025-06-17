import {User} from "../Models/user.model.js"


const EditUser = async (req,res) => {
    try{
        const userId = req.user._id;
        const {fullName,email} = req.body;

        const updateFields = {}
        if(fullName && fullName.trim() !==  "")  updateFields.fullName = fullName;
        if(email  && email.trim() !==  "")  updateFields.email = email;


        if(Object.keys(updateFields).length === 0){
            return res.status(400).json({message : "No vaid field for update"})
        }

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {$set : updateFields},
            {new :true}
        )

        res.status(200).json({
            message : "user Update Successfully",
            user : updateUser,

        })
    }catch(error){
        console.log("Edit User failed",error.message)
        res.status(500).json({message : "edit user Internel Error"})
    }
}


export {EditUser}