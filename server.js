require('dotenv').config()
const mongoose =require("mongoose")
const express =require("express");
const app =require("./app")
const port =process.env.PORT || 8090



mongoose.connect(process.env.MONGO).then(function(){
    console.log("database connected")
})




app.listen(port,function(){
    console.log(`server running at port ${port}`)
})
