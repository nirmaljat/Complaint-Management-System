import  express  from "express";
import { deleteTask, getMyTask, newTask, updateMyTask } from "../controler/task.js";
import { isAuthenticated } from "../middleware/auth.js";

const router=express.Router();

router.post("/new",isAuthenticated,newTask)
router.get("/my",isAuthenticated,getMyTask)
router.route("/:id").post(updateMyTask).delete(deleteTask)

export default router;