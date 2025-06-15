import { User } from "../Models/user.model.js";
import {getRandomAvatar}  from "../Utils/AvatarList.js"

const  userSignUp = async (req,res) => {
    try{
        
        const {fullName,email,password,profilePicture} = req.body;

        // check validations
        if(!fullName || !email || !password){
            return res.status(400).json({message : "ALL filed is Required"})
        }

        // check already user exist 
        const existingUser =  await User.findOne({email})
        if(existingUser){
            return res.status(409).json({ message : "User Already exist"})
        }


        //profile avatar
        const avatar = getRandomAvatar()

        const user = new User({
            fullName,
            email,
            password,
            profilePicture : avatar
        })

        await user.save()

        // generate jwt token
        const token = await user.generateJWT()

    res.status(201)
    res.cookie('token',token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'None', 
        maxAge: 7 * 24 * 60 * 60 * 1000   
    })
    .json({
        message : "User Registered Successfully",
        user : {
            _id : user._id,
            fullName : user.fullName,
            email : user.email
        },
        token,

    })
    }catch(error){
        console.log("user SignUp failed",error.message);
        res.status(500).json({ message: "Server error" });

    }
}


export {userSignUp}