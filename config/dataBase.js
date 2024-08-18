const mongoose = require('mongoose')
const connection = mongoose.createConnection('mongodb://localhost:27017/QuizToPia').on('open', () => {
    console.log("Database connected")
}).on('error', () => {
    console.log("Database not connected")
})

module.exports = connection
