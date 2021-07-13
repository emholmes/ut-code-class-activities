const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');
// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
//
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: "communication",
    message: 'What is your preferred method of communication?'
  }, 
  {
    type: 'input',
    name: 'languages',
    message: 'What languages do you know?'
  }
]).then('log.txt', answers => console.log(answers));
// Write the user response to a file by chaining the below callback method to the prompt above.
function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  //

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
};
