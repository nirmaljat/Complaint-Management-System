import  express  from "express";
import {  login, logout, register,mydetails } from "../controler/user.js";
import { isAuthenticated } from "../middleware/auth.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me",isAuthenticated,mydetails);


export default router;