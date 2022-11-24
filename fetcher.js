const request = require('request');
const fs = require("fs");

const url = process.argv[2] // used index to get argument
const path = process.argv[3]
 

request(url, (error, response, body) => {
  if(error){
  console.log('error:', error); // Print the error if one occurred
  }
  fs.writeFile(path, body, (error) => {
    if (error){
    console.log('error:', error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  })
  
});