const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");

//array holding all questions to prompt user
const questions = [
    {
        type: `input`,
        message: `What is your project name?`,
        name: `title`
    },
    {
        type: `input`,
        message: `Please enter a description for your project:`,
        name: `description`
    },
    {
        type: `input`,
        message: `Please enter any installation instructions:`,
        name: `installation`
    },
    {
        type: `input`,
        message: `Please enter any usage information:`,
        name: `usage`
    },
    {
        type: `input`,
        message: `Please enter any collaborators:`,
        name: `credits`
    },
    {
        type: `input`,
        message: `Please enter any contribution guidelines:`,
        name: `contribution`
    },
    {
        type: `input`,
        message: `Please enter any test instructions:`,
        name: `test`
    },
    {
        type: `list`,
        message: `Please select the license desired:`,
        choices: [`MIT`, `Apache`, `GPL`, `BSD`, `CDDL`, `EPL`],
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

//function to write data to readme file consisting of the writeFile fs
function writeToFile(data) {
    const fileName = `./output/README.md`;
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Success!`)
    );
   
}

//initializing function that prompts users with the question array then passes the data to the write to file function using the generatemarkdown as an arguement
function init() {
    inquirer .prompt(questions) 
    .then((data) => {
        writeToFile(generateMarkdown(data))
    })
  
}

init();