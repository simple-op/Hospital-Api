const mongoose=require("mongoose");


// connecting to mongodb local
mongoose.connect("mongodb://localhost:27017/hospital_api")

// accquring connection to check for errors
const connection=mongoose.connection;

//once running well gets success message in console
connection.once('open',function(){

    console.log("Database successfully connected");

})
 
// on error it display in console
connection.on('error',function(){

    
        console.log("error");
    
 })

module.exports=connection;