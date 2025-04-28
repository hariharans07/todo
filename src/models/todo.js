const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
},{
    timestamps:true
});

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const todoModel=mongoose.model('todo',todoSchema);
const authModel=mongoose.model('auth',authSchema);

async function createTodo(title, description) {
    const created=await todoModel.create({
        title,
        description
    });
    return created;
}

async function deleteTodo(_id) {
   const deleted= await todoModel.deleteOne({_id});
   return deleted;
    }

async function updateTodo(_id, title, description) {
    const updated=await todoModel.updateOne({_id},{
        title,
        description
    });
    return updated;
}

async function getTodo() {
    const todos = await todoModel.find();
    return todos;
  }

//pagination

async function pageTodo(page, limit) {
    const skip =(page -1)*limit;
    const todo = await todoModel.find().skip(Number(skip)).limit(Number(limit));
    return todo;
}

//signup function (account creation)
async function signup(username, password) {
    try {
        if (!username || !password) {
            throw new Error('Username and password are required');
        }
        
        const auth = await authModel.create({
            username,
            password
        });
        
        return auth;
    } catch (error) {
        throw error;
    }
}


async function getAuth() {
    const auths = await authModel.find();
    return auths;
  }

//login function
async function loginID(username,password){
    const login = await authModel.find({username,password});
    return login;
}

module.exports={
    createTodo,deleteTodo,updateTodo,getTodo,pageTodo,signup,loginID,getAuth
}