const express = require('express');
const app = express();
const port = 3004;

const students = require('./studentdb');

// display the details of the mentioned registration number.
app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    const result = students.find(student=>student.regno === id);

    //if the entered registration number is not in the arrya, display an error message.
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("Student not found!");
    }
});

//filter students by gender.
app.get('/gender/:gen',(req,res)=>{
    const gen = req.params.gen
    const result = students.filter(student=>student.gender === gen);
    res.send(result);
});

//filter student by name.
app.get('/name/:name',(req,res)=>{
    const name = req.params.name
    const result = students.filter(student=>student.name === name);
    res.send(result);
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});