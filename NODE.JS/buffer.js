//   ----------------------------------------------

const buff = Buffer.from("h!1").toString();
buff[1] = 1111;
console.log(buff.toString());
console.log(buff[0].toString());
console.log(buff[1].toString());
console.log(buff[2].toString());