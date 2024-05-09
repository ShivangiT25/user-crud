const mongoose = require('mongoose')

//! Schema....(for MongoDB)
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true //!required true means mandatory field (is false by default)
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true //!email would be a unique value
    },
    gender:{
        type:String,
    },
    job_title:{
        type:String,
        default:"Engineer"
    }
},{
    timestamps:true
})

//! Model in Schema
const User = mongoose.model('User', userSchema);

module.exports = {
    User
}