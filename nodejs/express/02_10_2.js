const express=require('express');

const app=express();
app.get("/",(req,res)=>(
    res.send("Welcome")
));
app.get("/home",(req,res)=>(
    res.send("Welcome home")
));
app.get("/contact",(req,res)=>(
    res.send("Welcome co")
));
app.get("/search",(req,res)=>{ 
    const data= req.query.name;
    console.log(req.query)  
    res.send(`<h1>search result found</h1>
        ${req.query.name}
        <a href="/home">go to home</a>`
    );
});

app.listen(3000, () => {
    console.log("Server at http://localhost:3000");
})