import  express  from "express";
import {  login, logout, register,mydetails } from "../controler/user.js";
import { isAuthenticated } from "../middleware/auth.js";
import { errorMiddleware } from "../middleware/error.js";
const router=express.Router();

router.post("/register",register,errorMiddleware);
router.post("/login",login,errorMiddleware);
router.get("/logout",logout);
router.get("/me",isAuthenticated,mydetails);


export default router;