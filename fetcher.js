const input = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const readline = require('readline');

//Create interface rl boilerplate and define input output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Define URL as index 0 and path as index 1 of the new args.slice(2) from line 24
request(`${input[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for whatever URL that passed in input[0]

  fs.writeFile(`${input[1]}`, body, (err) => {
    if (err) {
      console.error(err);
    } else {
      //Upon completion, it should print out a message
      console.log(`Downloaded and save ${body.length} bytes to ${input[1]}`);
      process.exit();
    }
  });
});
