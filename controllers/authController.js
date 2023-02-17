const User =require("../modal/authModal");
const bcrypt = require('bcrypt');


const registeruser = async (req,res)=>{
    const saltRounds = 10;
    const hash= bcrypt.hashSync(req.body.password, saltRounds)
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
});
   
   await newUser.save().then(result=>{
        res.json({
            message:"Success",
            data:result
        })
    
})};

const loginuser = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
     const username=req.body.username
User.findOne({email}).then(user => {
    if (!user) return res.status(400).json({ msg: "User not exist" });

    bcrypt.compare(password, user.password, (err, data) => {
        //if error than throw error
        if (err) throw err

        //if both match than you can do anything
        if (data) {
            return res.status(200).json({ msg: "Login success" })
        } else {
            return res.status(401).json({ msg: "Invalid credencial" })
        }
    })
})


}



module.exports ={
    registeruser,
    loginuser
    
}