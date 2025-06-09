const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

const bookert = require('./routes/BookRoute')
const borrowert = require('./routes/BorrowRoute')
const studentert = require('./routes/StudentRoute')

app.use(express.json())
app.use('/book',bookert)
app.use('/borrow',borrowert)
app.use('/student',studentert)

mongoose.connect('mongodb://localhost:27017/libapp_DB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})