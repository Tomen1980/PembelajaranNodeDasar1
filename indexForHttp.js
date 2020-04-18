const http = require("http");
const path = require("path")
const fs = require("fs");

const server = http.createServer((req,res)=>{
    // if(req.url === "/"){
    //     fs.readFile(path.join(__dirname,"public","index.html"),(err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{"Content-type":"text/html"});
    //         res.end(content);
    //     })
    // }

    // if(req.url === "/about"){
    //     fs.readFile(path.join(__dirname,"public","about.html"),(err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{"Content-type":"text/html"});
    //         res.end(content);
    //     })
    // }

    // if(req.url === "/api/users"){
    //    const users = [
    //        {name : "Agung Jumantoro Andrian", age : 28},
    //        {name : "Suwardi Joni", age : 25}
    //    ];
    //         res.writeHead(200,{"Content-type":"aplication/json"});
    //         res.end(JSON.stringify(users));
    //     }

        //////build path
    let filePath = path.join(__dirname,"public", req.url === "/" ? "index.html" : req.url);

        //extention of file
    let extname = path.extname(filePath);

        //initial content type
    let contentType = "text/html";

        //check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "aplication/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;

    }

   // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})