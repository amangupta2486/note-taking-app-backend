const express =require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const connect = require('./connectToDatabase');
const User = require('./schema');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const app = express();

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
    const reqBody = req.body;
    console.log(reqBody.notes);

    const newNotes = new User({
        notes: reqBody.notes,
        author: reqBody.author,
    });

    await newNotes.save();
    return res.json(true);
});

app.get('/',async (req,res)=>{
     const notesList = await User.find();
     return res.json(notesList);
})

const port = process.env.PORT || 4300;

app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
    connect();
});