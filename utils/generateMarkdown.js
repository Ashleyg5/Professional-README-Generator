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
function generateMarkdown(data) {
  
  console.log(data)
  return `# ${data.title}`, `## ${data.description}`, `## ${data.installation}`, `## ${data.usage}`, `## ${data.contribution}`, `## ${data.test}`, ` ## ${data.license}`, `## ${data.username}`,`## ${data.email}`;
  }
  function license (data) {
    const license = data.license;
    renderLicenseBadge(license);
    writeToFile();
  //license functions in here passing data to the functions called licenseFunction(data.license)
}

module.exports = generateMarkdown;
