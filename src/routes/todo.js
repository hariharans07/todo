const express=require('express');
const {createTodo,deleteTodo,updateTodo}=require('../models/todo');
const router=express.Router();

router.post('/',async(req,res)=>{
    console.log({body:req.body});
    const {title,description}=req.body;
    const todo=await createTodo(title,description);
    res.send(todo);
})

router.delete('/:id',async(req,res)=>{
    const _id=req.params.id;
    const resp=await deleteTodo(_id);
    res.send(resp);
});

router.put('/:id',async(req,res)=>{
    const _id=req.params.id;
    const {title,description}=req.body;
    const todo=await updateTodo(_id,title,description);
    res.send(todo);
})  

module.exports=router;