const express=require('express')
const router = express.Router()
const Course = require('../models/Course')

//Retrieves all courses from the database.
router.get('/',async (req,res)=>{
    try{
        const results = await Course.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 

//Retrieves a single course by its MongoDB ID.
router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Course.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

//Retrieves courses that match a specific course code (e.g., CS101).
router.get('/code/:cid', async (req, res) => {
    try {
        const cid = req.params.cid;
        const results = await Course.find({ code: cid });

        if (results && results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
})

module.exports=router