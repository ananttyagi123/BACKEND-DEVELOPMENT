//  --------------------   WORKING WITH FILES IN NODE JS ------------ //

const fs  = require("fs");

fs.readFile("file.txt",'utf8',(err,data)=>{
if(err)throw err;
console.log(data);
});

const data  = fs.readFileSync("file.txt",{encoding:'utf-8',flag:'r'});

console.log(data);


fs.stat("file.txt",(err,stats)=>{
  if(err){
    console.error(err);
    return 
  }
})