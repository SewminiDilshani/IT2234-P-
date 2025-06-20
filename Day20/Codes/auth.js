const User=require('../models/User')
const secretkey="vau.phy@2025"
const jwt=require("jsonwebtoken")

function verifyToken(req,rews,next){
    try{
        const token = req.headers.authorization
        if(!token){
            return res.status(403).send("Security Token Not Available!")
        }
        //console.log(token.split(" ")[1])
        //decryption
        jwt.verify(token.split(" ")[1],secretkey,async(err,decoded)=>{
            //console.log(decoded)
            if(!decoded){
                return res.status(401).send("Invalid Token!")
            }
            const userId = decoded.ID
            const user = await User.findById(userId)
            //console.log(user)
            if(!user || err){
                return res.status(401).send("Invalid Token!")
            }
            next()
        })
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
}
module.exports={verifyToken}