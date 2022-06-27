const CourseModel = require('../model/course.model')

const create = (req,res,next) => {
    const {fname, lname, email, course, courseid, description} = req.body

    CourseModel.create({
        fname, 
        lname, 
        email, 
        course,
        courseid,
        description
    }, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Entered the Course",
            data: result
        })
    })
}

const read = (req,res,next) => {
    CourseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved All the Courses",
            data: result
        })
    })
}

const findByCourseField = (req,res,next) => {
    CourseModel.findOne(req.body, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved By the field",
            data: result
        })
    })
}

const findByCourseId = (req,res,next) => {
    CourseModel.findOne({_id:req.params.id}, (err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Successfully Retrieved By the Course Id",
            result
        })
    })
}


const deleteCourseById = (req,res,next) => {
    CourseModel.deleteOne({_id:req.params.id},(err,result) => {
        if(err)
        next(err)
        res.status(200).json({
            status: "success",
            message: "Deleted Course by the Course Id",
            data: result
        })
    })
}

module.exports = {create, read, findByCourseId, findByCourseField, deleteCourseById}
