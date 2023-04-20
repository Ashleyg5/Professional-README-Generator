//function to render the badge as clickable, allowing user to read into the license chosen, with logic to check if the license is null 
function renderLicenseBadge(license) {
  if (license === null){
    license = '';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/license/${license}/)`}

  
}
//function to render the license section with logic, and a statement giving the user the option to read more about license chosen
function renderLicenseSection(license) {
  if (license === null){
    license = '';
  } else {
    return ` Read more about ${license} by clicking  `
  }
  
 }
//function to render the github url according to the github username inputted by user
function renderGithubUrl(username){
  if (username === null){
    username = '';
  } else {
    return `[${username}](https://github.com/${username})`
  }
  
}
//function to generate mark down using template literals in the structure wanted
function generateMarkdown({title, description, installation, usage, credits, contribution, license, test, username, email}) {
  return `
  # ${title}

  ## Badge
  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  
  ${installation}
  

  ## Usage
  
  ${usage}


  ## Credits

  ${credits}
  

  ## License

  ${renderLicenseSection(license)}[here.](https://opensource.org/license/${license}/)


  ## Contributions
  
  ${contribution}
  

  ## Tests
  
  ${test}
  
  
  ## Questions

  If you have any questions and would like to reach me directly, please see below:

  Github: ${renderGithubUrl(username)}

  Email: ${email}`
  
  }

//exports the generatemarkdown to be used in the index.js
module.exports = generateMarkdown;
