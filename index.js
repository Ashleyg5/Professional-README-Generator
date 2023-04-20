const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");

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


function writeToFile(data) {
    const fileName = `./output/README.md`;
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Success!`)
    );
   
}


function init() {
    inquirer .prompt(questions) 
    .then((data) => {
        writeToFile(generateMarkdown(data))
    })
  
}

init();