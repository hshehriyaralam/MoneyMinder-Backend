import mongoose, { Schema } from "mongoose";

const transactionsSchema = new Schema({
    type : {
        type : String,
        enum : ["income", "expense"],
        required :true,
    },
    category : {
        type : String,
        required :true,
    },
    amount : {
        type : Number,
        required :true
    },
    description : {
        type :String,
        default : ''   
    },
    date : {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }
},{
    timestamps : true,
})







const Transactions = mongoose.model("transactions", transactionsSchema)


export {Transactions}