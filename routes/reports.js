
const express = require('express');
const router = express.Router();
const passport = require('passport');
const report_api = require("../controllers/reportsapi");


router.get('/:status',passport.authenticate('jwt',{session: false}),report_api.reports);


module.exports = router;