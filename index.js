// require express framework
const express=require("express");
const app=express();
// setting up the port
const port=8000;
const passport = require('passport');
// require router from routes index
const router=require("./routes/index")

require("./config/passport-jwt")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// using router as middleware
app.use("/",router)

// firing up the server
app.listen(port,"localhost",function(err){

    if(err){
        console.log(err);

    }
    else{
        console.log(`server running on ${port}`)
    }
});