
function renderLicenseBadge(license) {
  if (license === null){
    license = '';
  } else {
    return `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`}

  
}

function renderLicenseLink(license) {
  if (license === null){
    license = '';
  } else {
    return `[License](#license)`
  }
 
  
}


function renderLicenseSection(license) {
  if (license === null){
    license = '';
  } else {
    return ` ## License`
  }
  
 }


function generateMarkdown({title, description, installation, usage, contribution, license, test, username, email}) {
  return `
  # ${title}
  ${renderLicenseBadge(license)}
  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - ${renderLicenseLink(license)}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ${renderLicenseSection(license)}
  
  ${license}
  
  ## How to Contribute
  
  ${contribution}
  
  ## Tests
  
  ${test}
  
  ## Questions
  ${username}
  ${email}`
  
  }


module.exports = generateMarkdown;
