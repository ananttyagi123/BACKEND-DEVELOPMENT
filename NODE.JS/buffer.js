//   ----------------------------------------------

var buff = Buffer.from("h!1").toString();
buff[1] = 1111;
buff[0] = 32432;
buff[2] = 34324;

console.log(buff.toString());
console.log(buff[0].toString());
console.log(buff[1].toString());
console.log(buff[2].toString());


console.log(5);
var buf = Buffer.alloc(5, 'Anant');;
console.log('buffer value of my name: ')
console.log(buf);

console.log(buf.fill('a'));
const buf1 = Buffer.from('Anant');
console.log('encoding-----------------');
console.log('--------------------------------------------');
console.log(buf1.toString('hex'));
console.log(buf1.toString('ascii'));
console.log(buf1.toString('latin1'))
console.log(buf1.toString('base64'));
console.log(buf1.toString('utf-16le'));
console.log(buf.toString('utf8'));


// types of encoding 
// encoding from buffer 
