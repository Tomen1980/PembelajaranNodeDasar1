const path = require("path");
const fs = require("fs");

///////////////////////////////////////////////////////////////////create folder 
// fs.mkdir(path.join(__dirname,"/test"),{},(err)=>{
//     if(err) throw err;
//     console.log("Folder created");
// })

///////////////////////////////////////////////////////////////////create folder and write to file
// fs.writeFile(
//     path.join(__dirname,"/test","hello.txt"),
// "Hello World",
// (err)=>{
//     if(err) throw err;
//     console.log("File written to....")

//     //////////////////////////////////////////////////////////////File Append
//     fs.appendFile(
//         path.join(__dirname,"/test","hello.txt"),
//     " I Love Node.js",
//     (err)=>{
//         if(err) throw err;
//         console.log("File written to....")
//     })
// })

/////////////////////////////////////////////////////////////////////Read file
// fs.readFile(path.join(__dirname,"/test","hello.txt"),
//     "utf8",
//     (err,data)=>{
//         if(err) throw err;
//         console.log(data);
//     }
//     )

/////////////////////////////////////////////////////////////////////Rename file
fs.rename(
    path.join(__dirname,"/test","hello.txt"),
    path.join(__dirname,"/test","helloWorld.txt"),
    (err)=>{
        if(err) throw err;
        console.log("file renamed....");
    }
)