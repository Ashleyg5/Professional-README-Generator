const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is your project name?`,
        name: `title`
    },
    {
        type: `input`,
        message: `Please enter a description for your project.`,
        name: `description`
    },
    {
        type: `input`,
        message: `Please enter any installation instructions.`,
        name: `installation`
    },
    {
        type: `input`,
        message: `Please enter any usage information.`,
        name: `usage`
    },
    {
        type: `input`,
        message: `Please enter any contribution guidelines.`,
        name: `contribution`
    },
    {
        type: `input`,
        message: `Please enter any test instructions.`,
        name: `test`
    },
    {
        type: `list`,
        message: `Please select the license desired:`,
        choices: [`MIT`, `Apache`, `GPL`, `BSD`, `CDDL`, `EPL`, `Ms-PL`],
        name: `license`
    },
    {
        type: `input`,
        message: `What is your Github username?`,
        name: `username`
    },
    {
        type: `input`,
        message: `What is your email address?`,
        name: `email`
    }
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `${data.title}.md`;
    fs.writeFile(fileName, JSON.stringify(data, null, `/t`), (err) =>
    err ? console.log(err) : console.log(`Success!`)
    );
   
}

// TODO: Create a function to initialize app
function init() {
    inquirer .prompt(questions) .then(generateMarkdown)
  
}


//inquirer goes in here. prompt question array will be arguement
//.then call back function that uses generatmarkdown as data source, pass data to markdown using spread operator 

// Function call to initialize app
init();


module.exports = writeToFile;