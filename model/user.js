import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        type:String,
        require:true,
        uinque:true
    },
    password:{
        require:true,
        type:String,
    }
})

export const User = mongoose.model("User", schema);