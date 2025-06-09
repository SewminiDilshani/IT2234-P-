const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const service = require('../service/filter')

const mongoose = require('mongoose')
router.get('/',async (req,res)=>{
    try{
        const results=await Book.find()
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

//Q2
router.get('/bookGenre/:gen',async (req,res)=>{
    try{
        const gen = req.params.gen
        const results = await Book.find({genre:gen});
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
router.get('/genre/:gen',async(req,res)=>{
    const genrename = req.params.gen
    service.filterFun(res,Book,{genre:genrename})
})


module.exports = router