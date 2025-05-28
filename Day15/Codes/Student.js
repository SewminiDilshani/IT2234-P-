const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeID:{type:String,require:true,ref:'degrees'},
    enrolled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})

const Student =mongoose.model('students',studentSchema)
const Kolins = new Student({
    _id:'2020IT01',
    name:'Peter Kolins',
    date_of_birth:'1995-05-18',
    gender:'Male',
    degreeID:'FAS2000ICT',
    enrolled_courses:['68334a7746c5920f4ff2167d']
})

//Kolins.save()
module.exports=Student