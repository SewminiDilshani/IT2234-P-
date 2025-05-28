const express  = require('express');
const app = express();
const port = 3005;
const mongoose = require('mongoose')
const coursert=require('./route/courseRoute')
const degreert=require('./route/degreeRoute')
const studentert=require('./route/studentRoute')

app.use(express.json())
app.use('/course',coursert)
app.use('/degree',degreert)
app.use('/student',studentert)

mongoose.connect('mongodb://localhost:27017/studentInfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})



app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})