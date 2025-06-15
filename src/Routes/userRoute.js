import  express  from "express";
import {userSignUp} from "../Controllers/userSignUp.js"
import {userLogin}  from  "../Controllers/userLogin.js"
import {fetchUser} from "../Controllers/getUser.js"
import {authMiddleware} from "../Middleware/authMiddleware.js"

const userRouter = express.Router()

userRouter.post('/signup',userSignUp)
userRouter.post('/login', userLogin)
userRouter.get('/fetch-user', authMiddleware, fetchUser)




export default  userRouter;