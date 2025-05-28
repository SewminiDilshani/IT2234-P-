
const mongoose = require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    gender:{type:String},
    age:{type:Number},
    salary:{type:Number},
    ETFId:{
        type:String,
        require:true,
        ref:'ETF'
    },
    departmentId:{
        type:String,
        require:true,
        ref:'Department'
    },
   current_projects:[{type:String,require:true,ref:'Project'}]
})

const Employee = mongoose.model('Employee',employeeSchema)
const Jane = new Employee({
    _id:'EMP001',
    name:'Jane Ayre',
    gender:'female',
    age:25,
    salary:50000,
    ETFId:'EMPPM01',
    departmentId:'PM',
    current_projects:['PR001','PR002']
})

const Kevin = new Employee({
    _id:'EMP002',
    name:'Kevin Levin',
    gender:'male',
    age:27,
    salary:60000,
    ETFId:'EMPPM01',
    departmentId:'HR',
    current_projects:['PR002']
})
const Jennie = new Employee({
    _id:'EMP003',
    name:'Jennie Kim',
    gender:'female',
    age:22,
    salary:75000,
    ETFId:'EMPPM02',
    departmentId:'IT',
    current_projects:['PR001','PR002']
})


Jane.save()
Kevin.save()
Jennie.save()

module.exports=Employee
