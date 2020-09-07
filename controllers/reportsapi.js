
const Report = require('../models/reports');
const Status=[
    "Negative","Travelled-Quarantine","Symptoms-Quarantine","Positive-Admit"
]




//fetch all reports for a given status code 

module.exports.reports = async function(req,res){
    try{
        let status = Status[req.params.status]
        if(!status){
            return res.json(500,{
                message: "No Records Found "        
            });
        }
        //fetch all reports of req.param.status
        
        let reports  =await Report
        .find({status: status})
        .sort('createdAt')
        .populate('doctors')
        .populate('patients');
        return res.json(200,{reports: reports});
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message: "SERVER ERROR",        
        })
    }
}