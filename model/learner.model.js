const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

UserSchema.pre('save', function(next) {
    const saltRounds = 10
    this.password = bcrypt.hashSync(this.password,saltRounds)
    next()
})

module.exports = mongoose.model('user',UserSchema) // Function Call