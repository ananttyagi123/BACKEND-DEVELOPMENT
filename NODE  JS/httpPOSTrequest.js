const http = require("http");

const data = JSON.stringify({
  name:"john",
  job:"web dev"
});


const options = {
  hostname:"require.com",
  path:'/api/user',
  header:'POST',
  method:{
    'content-writer':'application-writer'
  }


}


const req = http.request(options,(resp)=>{
   let data = "";
   console.log("status code",resp.statusCode)

   resp.on("data",(chunk)=>{
    data += chunk;
   

})

})