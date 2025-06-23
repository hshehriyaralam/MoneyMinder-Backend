import { app } from './app.js'
import DBConnect from "./src/DB/index.js"
import dotenv from 'dotenv'
dotenv.config({
    path : './.env'
})
const PORT = process.env.PORT || 3000


DBConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running ${PORT}`);
        
    })
}).catch((error) => {
    console.log("MongoDB COnnections Failed", error.message);
    
})