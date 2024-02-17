// import express from "express";
// import { register, login, logout } from "../controllers/auth.js";

// CommonJS syntax for importing modules
const express = require('express');
const { register, login, logout } = require('../controllers/auth.js');


const router = express.Router();

// console.log("this is auth")
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// export default router;
module.exports = router;
