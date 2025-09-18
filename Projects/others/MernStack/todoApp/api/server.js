const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
require('dotenv').config()

const port = 4001;
app.use(express.json());
app.use(cors());

const connectionString = process.env.MONGO_URI
mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))


//routes 
app.get('/todo', async(req,res)=> {
    const todos1 = await Todo.find();
    res.json(todos1)
})

app.post('/todo/new', async(req,res)=> {
    const task = await Todo.create(req.body)
    res.status(201).json({task})
})

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
});

app.patch('/todo/update/:id', async(req,res)=>{
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json(result)
})


app.listen(port, console.log(`server is running on port ${port}`))