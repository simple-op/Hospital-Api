const Doctor = require('../models/doctors');
const Patient = require('../models/patients');
const Report = require('../models/reports');

const Status=[
     "Negative","Travelled-Quarantine","Symptoms-Quarantine","Positive-Admit"
]



//register a new patient based on phone number 
module.exports.register = async function(req,res){
     console.log("dsadas")
    try{        
        if(req.body.phone === undefined){            
            return res.status(500).json({
                message: "Phone number is missing, please retry"    
            });
            
        }
        else{            
            let patient =  await Patient.findOne({phone: req.body.phone},{createdAt:0,updatedAt:0,__v:0});
            if(patient){
                return res.status(500).json({
                    message: "Patient is already registered",
                    patient:  patient      
                });
            }
            else{
                patient= await Patient.create(req.body);
                patient = await Patient.findById(patient._id);
                return res.status(200).json({
                    message: "Patient Registered Success!!",
                    patient_details:  patient        
                });
            }
        }
        
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in registering the Patient",        
        })
    }
    
}

//create report for a patient 
module.exports.createReport = async function(req,res){
    
    try{
        //doctor can be found using req.user.id
        let doctor = await Doctor.findById(req.user.id);
        if(!doctor){
            return res.status(500).json({
                message: "Error in finding doctor's account, Please login again"        
            });
        }
        //patient can be found using req.param.id
        let patient = await Patient.findById(req.params.id);
        

        if(!patient){
            return res.status(500).json({
                message: "Error in finding patient, please make sure that the pateint is registered"        
            });
        }
        //status can be found using req.body.status
        let status = Status[req.body.status]
        if(!status){
            return res.json(500,{
                message: "Invalid status code selected, please try again with a valid status code"        
            });
        }

        //create report
        let report = await Report.create({
            status: status ,
            doctor: doctor,
            patient: patient,
            Date: new Date().toDateString()
            
        })

        //fetch the required details from the new report
        report = await Report
        .findById(report._id)
        .populate('doctors')
        .populate('patients')
        return res.json(200,report);
        
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in creating a new report for the Patient",        
        })
    }
    
}


//fetch all reports for a patient(oldest to newest) 
module.exports.allReports = async function(req,res){

    try{
        //patient can be found from req.param.id
        let patient = await Patient.findById(req.params.id);
        if(!patient){
            return res.status(500).json({
                message: "Error in finding the patient",        
            })
        }

        let reports = await Report
        .find({patient: patient})
        .sort('createdAt').populate('doctors')
        .populate('patients')

        return res.status(200).json({reports: reports});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in fetching the reports!",        
        })
    }
}