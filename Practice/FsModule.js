const fs = require('fs');

// here i am writing the content in file manually 
fs.writeFileSync("source.txt", " Hello my name is piyush 👌 ");

// here i am reading the buffer data and converting (encoding it) in utf8 format and then soring it in a variable
const data = fs.readFileSync("source.txt", "utf8");

// now i am transfering  that recorded data from file 1 to file 2 
fs.appendFileSync("destination.txt", data)

// and finally reading that data and stored it in a {data2} variable 
const data2 = fs.readFileSync("destination.txt", "utf8");

console.log(data2);
