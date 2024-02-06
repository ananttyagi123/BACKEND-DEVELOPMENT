// How to create a JSON file 
// Create JSON file like an object 

// const data = {
//   name:"Anant Tyagi",
//   Age:32,
//   title:"Dev-ops Engineer"
// }
// // return in tthe form of String
// const jsonStr = JSON.stringify(data,["Age"],5);
// console.log(jsonStr);

// // JSON.parse

// const jsonParse = JSON.parse(jsonStr);

// IMPORT MODULE OF  A FILE SYSTEM

const { error } = require("console");
var fs = require("fs");
var b = fs.readFileSync('hello2.json', { encoding: "utf8" });
console.log(b);
const parseData = JSON.parse(b);
console.log(parseData);


// EATING FILE ASYNCHRONOUS

fs.readFile('hello2.json',(err,data)=>{
  if(err){
    return err;
  }
  else{
    let parse = JSON.parse(data);
    console.log(parse);
  }
})



// WRITING IN A FILE 
var m = fs.writeFileSync('hello2.json',"hello my name is Anant Tyagi");
console.log(b);

fs.write('hello2.json',parsed,(err)=>{
  if(err) return error
  console.log("DATA WRITTEN SUCESSFULLY")
});

