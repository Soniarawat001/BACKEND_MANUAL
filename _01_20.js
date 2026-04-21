const fs=require("fs");
const fd=fs.openSync("animals.txt","w+");
fs.writeSync(fd,"we are here \nhello");

// fs.writeFileSync("data.txt","Wanted cat and bun");
// fs.appendFileSync("data.txt","on emore\n");

// fs.renameSync("data.txt","animals.txt");

// fs.cpSync("animals.txt","hello.txt");

// fs.unlinkSync("hello.txt");         //means delete this file 

// fs.writeFile("animals.txt","hello cuties!!",(err) => {
//     if(err)
//         console.log(err);
    
//     else
//         console.log("file created successfully");
// });

// fs.readFile("animals.txt", "utf-8", (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

fs.readFile("animals.txt", "utf-8", (err, data) => {
    if (err) return console.error(err);

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
