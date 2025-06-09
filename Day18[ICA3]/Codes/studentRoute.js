const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const service = require('../service/filter')

const mongoose = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results=await Student.find()
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

//Q3
router.get('/studentYear/:ye',async (req,res)=>{
    try{
        const ye = req.params.ye
        const results = await Student.find({year:ye});
        if(results && results.length>0){
            res.status(200).json(results);
        }else{
            res.status(404).send("Sorry, No Data found!");
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server error!")
    }
})

//Q4
router.get('/year/:yr',async(req,res)=>{
    const y = req.params.yr
    service.filterFun(res,Student,{year:y})
})

module.exports = router