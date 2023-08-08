import {User} from "../model/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
export const register= async (req,res)=>{
    const { name,email, password } = req.body;

    let user= await User.findOne({email});
    if(user){
        return res.send("User Allredy Exist")
    }

    user = await User.create({ name, email, password});
    sendCookie(user, res, "Registered Successfully", 201);

}

export const login= async (req,res)=>{
    const { email, password } = req.body;
    let user= await User.findOne({email}).select("+password");;
    if(!user){
        return res.send("User Dont Exist")
    }
    if(password!=user.password){
        return res.send("INcorect Password")
    }
    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
}

export const logout= async (req,res)=>{
    res.status(200).cookie("token", "", { expires: new Date(Date.now()),})
    .json({
        success: true
      });

};
export const mydetails= async (req,res)=>{
    res.status(200).json({
        success: true,
        user: req.user,
      });
}