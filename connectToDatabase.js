// const mongoose  = require ('mongoose');

// const connectToDatabase = async () => {

//     mongoose.connect('mongodb://localhost:27017/My_Notes', ()=>{

//     console.log('Connected to database');
//     });
// };

// module.exports = connectToDatabase;


const mongoose  = require ('mongoose');
// require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const connectToDatabase = async () => {

    //const MongoURI = process.env.MONGO_URI;
    //console.log(MongoURI);
    
    mongoose.connect("mongodb+srv://user2:12345@cluster0.tfadt.mongodb.net/My_Notes", ()=>{

    console.log('Connected to database');
    });
};

module.exports = connectToDatabase;