// all routes for authentication
const express = require("express");
const router = express.Router();
const { register, createSession } = require("../controllers/doctors");

router.post("/register", register);
router.post("/login", createSession);


module.exports = router;