const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    phone:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now(),
        required:true
    }
   
},{
    timestamps:true
})






const model=mongoose.model("patients",schema);

module.exports=model;