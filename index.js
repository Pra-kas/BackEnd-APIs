const port = 4000;
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const userRouter = require('./router/authRouter')

app.use(cors())
app.use(bodyParser.json({limit:'50mb'}))
app.use(userRouter)
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port, () => console.log(`Server started http://localhost:${port}`));
