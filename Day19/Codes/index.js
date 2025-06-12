const express = require('express');
const app =express();
const port=3004;
const mongoose = require('mongoose')

const bookrt= require('./routes/bookRoute')
const studentrt= require('./routes/studentRoute')
const borrowrt= require('./routes/borrowRoute')
const userrt= require('./routes/userRoute')

app.use(express.json())
app.use('/book',bookrt)
app.use('/stu',studentrt)
app.use('/bor',borrowrt)
app.use('/user',userrt)

mongoose.connect('mongodb://localhost:27017/libapp_DB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})