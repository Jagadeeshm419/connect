const express = require('express')
const mongoose = require('mongoose')
const rou = require('./view/route')
const cors = require('cors')
const dotenv = require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 2000;

//middleware:

app.use(cors());
app.use(express.json())
app.use('/api', rou) // ---> http://localhost:4000/api

mongoose.connect('mongodb://localhost:27017/Mydata')
.then(()=>{
    console.log(`Connected Successfully to the Server ${PORT}`)
    app.listen(PORT)
})

//Bmwo0q7vfDLtd9Et