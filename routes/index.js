const express=require("express");
// requiring express router as middle ware 
const router=express.Router();
// requiring home controllers


const mongo=require("../config/mongoose")


// default home route

const doctor = require("./doctors");
const report = require("./reports");
const patient = require("./patients");


router.use("/doctors", doctor); 
router.use("/patients", patient);
router.use("/reports", report);

module.exports = router;

// exports router for  main index.js
module.exports=router;