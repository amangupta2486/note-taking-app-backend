const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    notes:{
        type:String,
        default:'',
    },
    
    author:{
        type:String,
        default:'',
    }
});

module.exports = mongoose.model('User', userSchema);