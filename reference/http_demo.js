const http = require("http");

//create server 
http.createServer((req,res)=>{
    //write respon
    res.write("Hello World");
    res.end();
}).listen(3000,()=>{
    console.log("server is running.....")
})