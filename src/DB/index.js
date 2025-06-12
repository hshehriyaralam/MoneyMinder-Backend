import { DB_NAME } from "../Constant.js"
import mongoose from "mongoose"


const DBConnect = async () => {
    try{
     const  connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`/n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("DB Connect is Failed");
        process.exit(1)
        
    }
}

export default DBConnect