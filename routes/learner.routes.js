const express = require('express')
const router = express.Router()
const controller = require('../controller/learner.controller')

router.post('/create',controller.create)

router.post('/login',controller.login)

module.exports  = router