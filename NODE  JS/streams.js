// --------------------------  STREAMS ---------------------------------//
// STREAMS ARE THE MOST FUNDAMENTAL OF THE NODE THEY ARE USED TO HANDLE NODE APPLICATION  NETWORK , 
//  READING AND WRITING FILES , END TO END COMMUICATION 
// STREAMS PROVIDE DATA EFFECIENCY , MEMORY AND TIME EFFECIENCY
const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,err){
  fs.readFile("path.json",(err,data)=>{
    res.end(data)
  });
})
server.listen(3000,()=>{
  console.log("Application Started on PORT 3000")});