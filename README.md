# Professional-README-Generator

## User Story
``
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
``

## Acceptance Criteria
``
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
``

## Description
 
I was tasked with creating a readme document generator using JavaScript, node, and npm. The user will be able to open the terminal and input 'node index' and then will be met with a prompt of questions (project title, description, etc). Once the user finishes all the prompts, they will be met with a log "success!" unless there is an error. The user will then see the readme generated inside the "output" folder. When the preview for the readme is opened, the user will see all the information inputted from the prompt inside the readme. Along with the sections of information, the user will see a clickable badge for their license appear at the top, as well as a link in the "license" section where they can read the documentation for their chosen license. 

## Usage

 [Video Submission Link](https://drive.google.com/file/d/12EssZnlYwsKAF2wqJ1Zq3gSRo6eRBnQ6/view)
![README Generator](https://user-images.githubusercontent.com/118938942/233505073-06c6cc86-97af-4f5f-8685-58e2e61480e9.png)
![README Generator](https://user-images.githubusercontent.com/118938942/233505082-4d774dea-aae5-4f77-a096-b9b85b3837ac.png)



## Credits

[Resource 1](https://opensource.org/)

[Resource 2](https://shields.io/category/license)

[Resource 3](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[Resource 4](https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a)

My classmates, instructor, and TA's.

## License

MIT

