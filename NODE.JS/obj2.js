const array1 = [12,23,34,45,56,67,78,89];
console.log(array1);

const array2 = new Array(10);
console.log(array2);
console.log(array2[0]);

console.log(array2.length);

array2.push(12);

array2.pop();

const array3 = [1,2,3,4,5];
var q = array3.copyWithin(2,0);
console.log(q);

var q = array3.copyWithin(2,0,1);
console.log(q);


var d = [5,8,2,6];
var h = d.sort();
console.log(h);


const ar = [1,2,34,3,45];
const ar2 = [4,5,3,43,4,3];

console.log(ar.concat(ar2));


// slice ----

console.log(ar.slice(0,3));
console.log(ar.shift());
console.log(ar.unshift(34));


var num = [2,1,6,9,8,17];
var b = num.every(function(x){
  return x%2 == 0;
})

console.log(b);


var num = [2,1,6,9,8,17];
var b = num.some(function(x){
  return x%2 == 0;
})

console.log(b);


var num = [2,1,6,9,8,17];
var b = num.filter(function(x){
  return x%2 == 0;
})

console.log(b);