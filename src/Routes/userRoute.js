import  express  from "express";
import {userSignUp} from "../Controllers/userSignUp.js"
import {userLogin}  from  "../Controllers/userLogin.js"
import {fetchUser} from "../Controllers/getUser.js"
import {authMiddleware} from "../Middleware/authMiddleware.js"
import { EditUser } from "../Controllers/EditUser.js";
import {upload} from "../Middleware/upload.js"
import {uploadProfileImage} from  "../Controllers/cloudinary.multer.js"


const userRouter = express.Router()

userRouter.post('/signup',userSignUp)
userRouter.post('/login', userLogin)
userRouter.get('/fetch-user', authMiddleware, fetchUser)
userRouter.put('/edit-user',authMiddleware,EditUser)
userRouter.post('/upload-profile',authMiddleware, upload.single('profilePicture'),uploadProfileImage)





export default  userRouter;