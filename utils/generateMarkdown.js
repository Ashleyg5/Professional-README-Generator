// TODO: Create a function that returns a license badge based on which license is passed in

const writeToFile = require("..");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`
  //this will use data passed form generatemarkdown function. logic gate to make sure a license was chosen
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //this will use data passed from generatemarkdown function logic gate to make sure a license 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, installation, usage, contribution, license, test, username, email) {
  return `
  # ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${license}
  
  ## How to Contribute
  
  ${contribution}
  
  ## Tests
  
  ${test}
  
  ## Questions
  ${username}
  ${email}`
  
  }

  function license (license) {
    renderLicenseBadge(license);
  //license functions in here passing data to the functions called licenseFunction(data.license)
}
license();
module.exports = generateMarkdown;
