const getAllDocuments = async (res,Model) => { 
    try { 
        const result=await Model.find() 
        if(result){ 
            res.status(200).json(result) 
        } 
        else{ 
            res.status(404).send("sorry"); 
        } 
    } catch (err) { 
throw new Error(`Error fetching documents: 
${err.message}`); 
} 
}; 
module.exports =  getAllDocuments ; 