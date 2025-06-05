const express=require('express'); 
const app=express(); 
const port=3006; 
const mongoose= require('mongoose'); 
const errorHandleMid=require('./middlewares/errorHandler') 
const projectert=require('./route/projectRoute') 
const taskert=require('./route/taskRoute') 
const userert=require('./route/userRoute') 
app.use(express.json()) 
app.use(errorHandleMid) 
app.use('/project',projectert) 
app.use('/task',taskert) 
app.use('/user',userert) 
app.use(errorHandleMid) 
mongoose.connect('mongodb://localhost:27017/taskDB').then(()=>{ 
console.log("Database connected") 
}).catch((error)=>{ 
console.error(error); 
}) 
app.listen(port,()=>{ 
console.log(`server is running on ${port}`); 
}) 