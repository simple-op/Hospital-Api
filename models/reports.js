const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    
    status: {
        type: String,
        
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors'
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients'
    },
    Date: {         
        type: String,
        default:Date.now()        
    },
   
    
},{
    timestamps: true
});


const Report = mongoose.model('reports',reportSchema);
module.exports = Report;