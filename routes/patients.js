  
const express = require('express');
const router = express.Router();
const passport = require('passport');
const patient = require("../controllers/patients");


router.post('/register',passport.authenticate('jwt',{session: false}),patient.register);
router.post('/:id/create_report',passport.authenticate('jwt',{session: false}),patient.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session: false}),patient.allReports);

module.exports = router;