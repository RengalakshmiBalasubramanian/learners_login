const mongoose = require('mongoose')

const LearnerSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    course:{
        type:String,
        required: true
    },
    courseid:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
}, 
{
    timestamps:true
})

module.exports = mongoose.model('learner', LearnerSchema)
