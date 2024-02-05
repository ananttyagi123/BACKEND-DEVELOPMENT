var a = 10 ;
console.log(typeof(a));

var b = 23.543;
console.log(typeof(b));


var c = "46435436435454543345";
console.log(typeof(c));


let d = 10000000n
console.log(typeof(d));

let e = null;
console.log(typeof(e));

let f = '';
console.log(typeof(f));


var x = Symbol("gy");
var y = Symbol("gy");
console.log(x == y);

// it showing false 
// linux development 

var g = Symbol("Anant");
var o = Symbol("Tyagi");




function Hello(){
 let  a = 10; 
 let b= 40; 
 let c = 45;
  if (a<b &&  c<b){
    console.log("B is the greater element ");
  }
  else if(b<a && c<a){
    console.log("C is the greater element");
  }
 else{
  console.log("A is the greater element");
 }

}

Hello();

var obj = {
  firstname:"Anant",
  lastname:"Tyagi"
}
console.log(obj);
console.log(obj.firstname);
console.log(obj.lastname);

obj["age"] = 19;

console.log(obj);
console.log(obj.age);

var obj2 = new Object(); 
obj2["fruit1"]="Apple";
obj2["fruit2"] = "Mango";
obj2["fruit3"] = "grapes";
console.log(obj2);

