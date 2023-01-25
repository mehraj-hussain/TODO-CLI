import express from "express";

const router = express.Router()


router.post("/add",(req,res)=>{
    try {
        res.status(200).json({success:"Add Task is Up."})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})

export default router;