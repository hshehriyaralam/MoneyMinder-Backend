import {OAuth2Client} from "google-auth-library"
import jwt from "jsonwebtoken"
import {User} from "../Models/user.model.js"


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


const googleAuth = async (req,res) => {
    const {userInfo} = req.body;

    try{
        if(!userInfo){
            return res.status(400).json({message : "Missing user Info"})
        }
        const {sub,email,name,picture} = userInfo;

        //Already exist
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                fullName : name,
                email,
               googleId : sub,
               profilePicture :picture,
               password: 'google_oauth_dummy_password',
            })
        }


        //Generate JWT Token 
        const tokenPayload = {
            id : user._id,
            email : user.email
        }
        const jwtToken = jwt.sign({_id :tokenPayload.id},process.env.JWT_SECRET, {
            expiresIn : '7d'
        })

        res.status(200)
        res.cookie("token", jwtToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .json({
            message : "Google Login Successfully",
            token : jwtToken,
            user,
        })
    }catch(error){
        console.log("Error Verifying  Google Token",error.message);
        res.status(401).json({
            error : "Invalid Google token"
        })
    }
}


export {googleAuth}

