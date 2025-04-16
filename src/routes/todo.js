const express=require('express');
const {createTodo,deleteTodo,updateTodo,getTodo,pageTodo,signup,loginID,getAuth}=require('../models/todo');
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

router.get('/',async (req,res)=>{
    const todos = await getTodo()
    res.send(todos)
})

//pagination
router.get('/page', async (req, res) => {
    const { page, limit} = req.body;
    const todo = await pageTodo(page, limit);
    res.send(todo);
});

//user authentication 
router.post('/signup', async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await signup(username, password);
        res.json("User created successfully");
    } catch (error) {
        res.json("Signup failed");
    }
});

router.get('/signup',async (req,res)=>{
    const auths = await getAuth()
    res.send(auths)
})


router.post('/login',async(req, res)=>{
    const {username,password} = req.body;
    console.log({body: req.body});  
    const login =await loginID(username,password);
    if (login.length<=0){
        res.json("invalid credentials");
    }
    else{
        res.json("Good!!")
    }
});


module.exports=router;