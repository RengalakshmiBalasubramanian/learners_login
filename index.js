const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const learnerRouter = require('./routes/learner.routes')
const courseRouter = require('./routes/course.routes')
const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            next(err)
        }else{
            next()
        }
    })
}

const app = express()
app.use(bodyParser.json())
app.use('/learnerlogin',learnerRouter)
app.use('/api/course',verifyJWT,courseRouter)

app.listen(process.env.PORT, () =>{
    console.log(`Successfully Connected to the server`)
})

app.set('secretKey','jnlkjjjlkjlajdlksfal')

mongoose.connect(process.env.MONGOURI)
.then(() => {
    console.log("Successfully Connected to the Database")
})
.catch((error) => {
    console.log(error)
})