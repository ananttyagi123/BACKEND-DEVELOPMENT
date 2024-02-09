// streams are the object tha let youu read the data from the source or written data to a ddestination 

// Streams is an instaces of event emitt
var fs = require('fs');
var data = '';
// create a readable stream

var reader = fs.createReadStream('test.txt');

// set the encoding to the UTF-8

reader.setEncoding('UTF8');
// to encode the file from the buiffer 

// handle stream events ---> data , end and error

reader.on('data', function (chunk) {
  data = chunk;
})

reader.on('end', function () {
  console.log(data);
})

reader.on('error', function (err) {
  console.log(err);

})



