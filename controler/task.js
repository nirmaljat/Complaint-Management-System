import { Task } from "../model/task.js";
import ErrorHandler from "../middleware/error.js";


export const  newTask =async (req,res,next)=>{
try {
    const {title, description}=req.body;

    await  Task.create({
        title,
        description,
        user:req.user,
    })

    res.status(201).json({
       success :true,
       message :"Task Added"
    })
} catch (error) {
    next(error);
}
}


export const getMyTask = async (req, res, next) => {
 
try {
    const userid = req.user._id;
  
    const tasks = await Task.find({ user: userid });

    res.status(200).json({
      success: true,
      tasks,
    });
} catch (error) {
    next(error);
}
};
  


  export const updateMyTask = async (req, res, next) => {
try {
    const tasks = await Task.findById(req.params.id);
    if (!tasks) return next(new ErrorHandler("Task not found", 404));
    tasks.isCompleted=!tasks.isCompleted;
    await tasks.save();
    res.status(200).json({
      success: true,
      message:"UPDATED"
    });
} catch (error) {
    next(error);
}
};



export const deleteTask = async (req, res, next) => {
 
try {
    const tasks = await Task.findById(req.params.id);
    if (!tasks) return next(new ErrorHandler("Task not found", 404));
    await tasks.deleteOne();
    res.status(200).json({
      success: true,
      message:"deleted"
    });
} catch (error) {
    next(error);
}
};

