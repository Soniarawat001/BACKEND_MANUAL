ateServer((req, res) => {
    fs.appendFile("log.txt",`${Date.now()}:New Request recorded\n`,
    (err)=>{
        if(err)console.log(err);