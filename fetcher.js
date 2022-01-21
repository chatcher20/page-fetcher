const request = require('request');    // Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
const url = process.argv[2];
const filePath = process.argv[3];
console.log(filePath);

const fs = require('fs');              // Use Node's fs (file system) module to write the file

request((url), (error, response, body) => {
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.log(error)
      return
    }
    // file writeen successfully
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for example.edu
});



/* 

The easiest way to write to files in Node.js is to use the fs.writeFile() API.

const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

*/

