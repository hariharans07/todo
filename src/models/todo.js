const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:String,
    descriptionn:String,
},{
    timestamps:true
});

const todoModel=mongoose.mongoose.model('todo',todoSchema);

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

module.exports={
    createTodo,deleteTodo,updateTodo
}