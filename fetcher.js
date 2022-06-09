///// Take two command line arguments
///////  1. a URL
///////  2. a local file path
///// Download the resource at URL to the local path
///// Upon completion print "Downloaded and saved 1235 bytes to ./index.html"

//DEMO
//input to node: node fetcher.js http://www.example.edu/ ./index.html
//output/result: Downloaded and saved 3261 bytes to ./index.html

const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);

request(`${input[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML from input[0]

  fs.writeFile(`${input[1]}`, body, (err) => {
    if (err) {
      console.error(err);
    } else {
      //File written successfully
      //Upon completion, it should print out a message
      console.log(`Downloaded and save ${body.length} bytes to ${input[1]}`);
      process.exit();
    }
  });
});
