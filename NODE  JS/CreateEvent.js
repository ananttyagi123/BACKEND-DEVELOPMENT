var event = require('events');
var obj = new event.EventEmitter;

obj.setMaxListeners(3);
console.log(obj.getMaxListeners());

// creating a loop 
for (i = 0; i <= 3; i++) {
  obj.addListener("dancing", function (msg) {
    console.log(msg);
  })
}

obj.emit("dancing", "lets Dance");

function Welcome(){
  console.log("Hello Javascript!")
}
// Set time  Out
var m = setTimeout(Welcome,1000);


var n = setInterval(Welcome,2000);
