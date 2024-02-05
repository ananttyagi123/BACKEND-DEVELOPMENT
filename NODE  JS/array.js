// const { spread } = require("axios");

// const cars = [" "," "];
// const cars1 = function cars(v,n,m){
//   this.cars1 = v;
//   this.cars2 = n;
//   this.cars3 = m;
// }

// cars.push("thar");
// cars.push("Audi Q7");
// cars.push("Toyota");

// console.log(cars);

// cars.splice(23,"revert");
// console.log(cars);
// console.log(Array.from("hello"));
// var arr3 = [10,20,30];

// var b = arr3.entries();

// console.log(b.next().value);
// // answer - [0,10]
// //        - [index,value]

// var a = 2;
// var b = 4;

// console.log(a+b);
// console.log(a++);
// console.log(a--);
// console.log(b++);
// console.log(b--);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a==b);
// console.log(a*b);
// console.log(a**b);

// const R = [12,23,3,45,45,45];
// console.log(R);
// const B = ["hello"];
// console.log(B);

// const T = ["",...B,...R];
// console.log(T);

// const m = [...B,...T];
// console.log(m);
// var n = 2
// for(var i=1; i<11; i++){
//     console.log(`2*${i} = ${n*i}`);
// }

// const arr4 = [12,23,45,56,]

// for (i of arr4) {
//   console.log(i+" ");

// }


var event = require('events');
// console.log(events);

var obj = new event.EventEmitter;
// console.log(obj);

obj.addListener("Dancing", function (msg) {
  console.log(msg)

}
)
obj.emit("dancing", "lets Dance");


