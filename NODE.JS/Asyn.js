const fs = require('fs');
const { stringify } = require('querystring');
var a = {
  Name:'A',
  Age:34,
  Marks:100
}
var b = stringify(a);
fs.writeFile('Student.json',b, (err) => {
  console.log("DATA WRITTEN SUCESSFULLY")
})

