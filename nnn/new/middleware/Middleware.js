const reqAge=(req,res,next)=>{
    const age= req.query.age;
    if(!age){ return res.send("age required!!");}
    else if(age<18){return res.send("not eligible!");}
    else{res.send("welcome to site"); 
        next();}}
module.exports = reqAge;