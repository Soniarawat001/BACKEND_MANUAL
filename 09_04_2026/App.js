const express = require('express');
const app = express();
const mongoose =require('mongoose');
app.use(express.urlencoded());
mongoose.connect("mongodb://127.0.0.1:27017/gooDb")
.then(()=>console.log("database connected"))
.catch(err=>console.log(err));

const newSchema = new mongoose.Schema({
    First_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    }

},{timestamps:true});

const user = mongoose.model("userdb",newSchema);

app.post("/about",async(req,res)=>{
    const user =await user.create(req.body);
    res.json(user);
})

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});




