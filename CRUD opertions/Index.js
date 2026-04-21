const express = require('express');
const app = express();
const users = require('./users.json')
const fs = require('fs');


app.use(express.urlencoded({extended:true}));
app.get('/api/users',(req,res)=>{
    return res.json(users);
    
})
//=============================== Name of user =================================

app.get('/usersname',(req,res)=>{
    const html = `<ul>
        ${users.map(user=>`<li>${user.name}</li>`).join(' ')}
    </ul>`
    res.send(html)
})
//============================== User details with Particular Id

app.get('/api/users/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const userwise = users.find(user=>user.id==id)
    return res.json(userwise);
    
})



app.post('/userdata',(req,res)=>{
    const data = req.body;
    console.log(data);
    users.push(data);
    fs.appendFile('./users.json',JSON.stringify(data),err=>{
        return res.json({msg:"file successfully appended"})
    });
    // return res.json({msg:"done"});
})

app.delete("/api/users/:id",(req,res)=>{
const id = Number(req.params.id);
const users =JSON.parse(fs.readFileSync('./users.json',"utf-8"));
const filteredUsers=users.filter(users=>users.id!==id);
fs.writeFileSync('./users.json',JSON.stringify(filteredUsers,null,2));
res.json({msg:"user deleted"});

});

app.patch("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const updates= req.body;
    const users=JSON.parse(fs.readFileSync('./users.json',"utf-8"));
    const updatedUsers=users.map(user => user.id === id?{...user,...updates}:user);
     
    fs.writeFileSync('./users.json',JSON.stringify(updatedUsers,null,2)
);
    res.json({msg:"user updated"});

});







app.listen(3000,()=>{
    console.log("Server is live on port http://localhost:3000");
})