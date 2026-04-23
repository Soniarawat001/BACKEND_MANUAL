const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get("/setCookie",(req,res)=>{
    res.cookie("uname","1234",{
        maxAge:24*60*60*1000,
        httpOnly:true,
        secure:false});
    res.send("Cookie Setup successfully");
})
app.get("/getCookie",(req,res)=>{
    const cookieData=req.cookies.uname;
    if(cookieData) {res.send(cookieData);}
})
//now we want to delete cookie
app.get("/deleteCookie",(req,res)=>{
    res.clearCookie("uname");
    res.send("cookie deleted!");
})
//time negative krke
//clear method krke


app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
})