import mongoose from "mongoose";
const product = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
})

const Order = new mongoose.Schema({
    products:{
        type:[product],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: String,
        default:"processing"
    },
    totalAmount:{
        type: Number,
        required:true
    }
})

export default mongoose.model("Order", Order);