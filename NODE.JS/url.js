const Url = require('url');
// const adr = 'https://www.google.com/search?q=what)id_node+js';
// var q = Url.parse(adr,true);


// console.log(q.host);  // localhost:3000
// console.log(q.pathname); // return /default.htm 
// console.log(q.search);            
// var qdata = q.query;
// console.log(qdata.month);

var b = require('querystring');
let parsed_url = a.parse(example);
let parsed_queryString = b.parse(parsed_url.query);

console.log("This is parsed URL: ",parsed_url);
console.log("This is parsed Query String: ",parsed_queryString);

const q2 = b.stringify({
  name:'localhost',
  page:'admin',
  month:'feb',
  year:'2024'
})










