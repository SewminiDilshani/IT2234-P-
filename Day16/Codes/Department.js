
const mongoose = require('mongoose')
const departmentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true}
})

const Department = mongoose.model('Department',departmentSchema)
const PM = new Department({
    _id:'PM',
    name:'Project Management'
})
const HR = new Department({
    _id:'HR',
    name:'Human Resources'
})
const IT = new Department({
    _id:'IT',
    name:'IT Operations'
})

PM.save()
HR.save()
IT.save()

module.exports=Department
