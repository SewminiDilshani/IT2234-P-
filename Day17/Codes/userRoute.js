const express = require('express'); 
const router = express.Router(); 
const Users = require('../models/User'); 
const getAllDocuments  = require('../service/getall'); 
// GET all departments 
router.get('/', async (req, res) => { 
    getAllDocuments(res,Users) 
}); 
module.exports = router; 