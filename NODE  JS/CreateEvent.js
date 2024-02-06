var event = require('events');
var obj = new event.EventEmitter;

obj.setMaxListeners(2);
console.log(obj.getMaxListeners());

// creating a loop 
for(i=0; i<=3; i++){
  obj.addListener("dancing",function(msg){
    console.log(msg);
  })
}

obj.emit("dancing","lets Dance");