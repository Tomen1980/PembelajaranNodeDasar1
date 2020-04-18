const path = require("path");

//base fileName
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//file extention
console.log(path.extname(__dirname));

//create path object 
console.log(path.parse(__dirname).base);

//concatenate paths 
console.log(path.join(__dirname,"test","hello.html"))