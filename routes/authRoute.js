const express=require("express");
const router = express.Router();
const { registeruser,loginuser} =require("../controllers/authController");



router.post("/register",registeruser)
router.post("/login",loginuser)




module.exports =router



