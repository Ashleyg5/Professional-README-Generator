
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

function renderGithubUrl(username){
  if (username === null){
    username = '';
  } else {
    return `[${username}](https://github.com/${username})`
  }
  
}

function generateMarkdown({title, description, installation, usage, credits, contribution, license, test, username, email}) {
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
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  
  ${installation}
  

  ## Usage
  
  ${usage}


  ## Credits

  ${credits}
  

  ${renderLicenseSection(license)}
  
  ${license}
  

  ## Contributions
  
  ${contribution}
  

  ## Tests
  
  ${test}
  
  
  ## Questions

  If you have any questions and would like to reach me directly, please see below:

  Github: ${renderGithubUrl(username)}

  Email: ${email}`
  
  }


module.exports = generateMarkdown;
