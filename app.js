const express =require("express");
const app =express();
const allroutes =require("./routes/authRoute")
app.use(express.json());

app.use("/auth",allroutes);




module.exports=app;