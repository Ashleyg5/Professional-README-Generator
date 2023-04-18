// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //this will use data passed form generatemarkdown function. logic gate to make sure a license was chosen
  //badges will be added using a template literal return `URL${license}` inside the URL where the license name is
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //this will use data passed from generatemarkdown function logic gate to make sure a license 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
//create readme in structure wanted 
`;
//license functions in here passing data to the functions called licenseFunction(data.license)
}

module.exports = generateMarkdown;
