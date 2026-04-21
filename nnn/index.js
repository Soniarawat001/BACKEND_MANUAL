const express= require("express");
const app=express();
app.set("view engine",'ejs');
app.get('',(req,res)=>{

    let student =
    {
        name :"sonia",
        roll :23,
        email :"abc@gamil.com",
        age :28,
        hobbies:["abc","bcd",'cde',"def "]
    };

    res.render("home",{ stu:student});

});







app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");});