import  express  from "express";
import {userSignUp} from "../Controllers/userSignUp.js"

const userRouter = express.Router()

userRouter.post('/signup',userSignUp)




export default  userRouter;