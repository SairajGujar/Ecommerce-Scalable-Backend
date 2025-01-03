import mongoose from "mongoose";

const OrderHistory = new mongoose.Schema({
    orders:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Order",
        default:[]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})


export default mongoose.model("OrderHistory", OrderHistory);