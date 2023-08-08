import {User} from "../model/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../middleware/error.js";



export const register= async (req,res)=>{
try {
    const { name,email, password } = req.body;

    let user= await User.findOne({email});
    if (user) return next(new ErrorHandler("User Already Exist", 400));

    user = await User.create({ name, email, password});
    sendCookie(user, res, "Registered Successfully", 201);
} catch (error) {
    next(error);
}

}

export const login= async (req,res)=>{
try {
    const { email, password } = req.body;
    let user= await User.findOne({email}).select("+password");;
 
    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
   
    if(password!=user.password){
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
} catch (error) {
    next(error);
}
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