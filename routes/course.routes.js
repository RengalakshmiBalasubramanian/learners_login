const router = require('express').Router()
const controller = require('../controller/course.controller')

router.post('/create', controller.create)
router.get('/getAll', controller.read)
router.get('/getById/:id', controller.findByCourseId)
router.post('/getByField', controller.findByCourseField)
router.delete('/deleteById/:id', controller.deleteCourseById)

module.exports = router