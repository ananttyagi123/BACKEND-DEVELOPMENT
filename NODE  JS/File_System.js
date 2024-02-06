// How to create a JSON file 
// Create JSON file like an object 

const data = {
  name:"Anant Tyagi",
  Age:32,
  title:"Dev-ops Engineer"
}
// return in tthe form of String
const jsonStr = JSON.stringify(data,["Age"],5);
console.log(jsonStr);

// JSON.parse

const jsonParse = JSON.parse(jsonStr);
