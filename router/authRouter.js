const route = require('express').Router()
const authController = require('../controller/authController')

route.post('/addUser',authController.addUserController)

module.exports = route