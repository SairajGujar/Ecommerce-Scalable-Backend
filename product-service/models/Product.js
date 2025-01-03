import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.model("Product", Product);