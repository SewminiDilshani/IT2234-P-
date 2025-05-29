const express = require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')
const Employee = require('../models/Employee')


router.get('/', async (req, res) => {
    try {
        const results = await Department.find()
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const results = await Department.findById(id)
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

// Get employees in a department
router.get('/emp/:did', async (req, res) => {
    try {
        const did = req.params.did
        const results = await Employee.find(
            { departmentId: did },
            { name: 1, departmentId: 1 }
        ).populate("departmentId")

        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

// Get number of employees in a specific department
router.get('/count/:did', async (req, res) => {
    try {
        const did = req.params.did
        const count = await Employee.countDocuments({ departmentId: did })

        res.status(200).json({ departmentId: did, employeeCount: count })
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

// Show employee count for each department
router.get('/with/count', async (req, res) => {
    try {
        const results = await Department.aggregate([
            {
                $lookup: {
                    from: 'employees',
                    localField: '_id',
                    foreignField: 'departmentId',
                    as: 'employees'
                }
            },
            {
                $addFields: {
                    employeeCount: { $size: "$employees" }
                }
            },
            {
                $project: {
                    employees: 0 
                }
            }
        ])

        res.status(200).json(results)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

//Display only emp id,name,department name
router.get('/emp/:did', async (req, res) => {
    try {
        const did = req.params.did
        const results = await Employee.find(
            { departmentId: did },
            { name: 1, departmentId: 1 }
        ).populate("departmentId").sort({name:-1})
//manipulate the results
const filterResult=results.map(emp=>({
    employee_id:emp._id,
    employee_name:emp.name,
    department_name:emp.departmentId.name
}))
        if (results) {
            res.status(200).json(filterResult)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

//Find how many employees are working in a department
//Shows the employee count along with each department
router.get('/with/empcount', async (req, res) => {
    try {
        const results = await Department.aggregate([
            {
                $lookup: {
                    from: 'employees',
                    localField: '_id',
                    foreignField: 'departmentId',
                    as: 'employees'
                }
            },
            {
                $project: {
                    name:1,
                    number_of_employees:{$size:"$employees"} 
                }
            }
        ])
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})
module.exports = router
