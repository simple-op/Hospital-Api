const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken'); 



// Registering a  doctor
module.exports.register = async function(req,res){
     console.log(req.body)
    try{
        
//if email already exist
        let doctor =  await Doctor.findOne({email: req.body.email});
        if(doctor){
            return res.json(409,{
                message: "User already exists",        
            });
        }
        else{
            console.log(req.body)
            await Doctor.create(req.body);
            return res.json(200,{
                message: "Registered Successfully",        
            });
        }
        
    }
    catch(err){
        console.log(err);
        return res.json(404,{
            message: "err in register ",        
        })
    }
    
}
//login doctor 
module.exports.createSession = async function(req, res){
    try{
        let doctor = await Doctor.findOne({email: req.body.email},{});
        if(!doctor || doctor.password!= req.body.password){
            return res.json(401,{
                message: "Invalid username or password"
            });
        }
        return res.json(200,{
            message: 'Sign in successfull',
            data:  {
                token: jwt.sign(doctor.toJSON(), 'ptwmjgad', {expiresIn:  '10000000'})
            }
        })
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    

}