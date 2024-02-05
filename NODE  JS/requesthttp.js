// HOW TO MAKE HTTP REQUEST 
const http = require("http");

http.get('http://api.open-notify.org/astros.json',resp =>{
  let data = '';
  resp.on('data',(e)=>{
    data+=e;
  })
  resp.on('end',()=>{
    let jsondata = JSON.parse(data)
    console.log(jsondata);
  })
})