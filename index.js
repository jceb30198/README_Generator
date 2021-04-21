// Framework and File system constants
const inquirer = require("inquirer");
const fs = require("fs")

// Array of prompts for the user to answer
const promptArr = [
  {
    type: "input",
    name: "title",
    message: "Title of the project:",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions for the project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Use of application:",
  },
  {
    type: "input",
    name: "license",
    message: "Licenses for the project:",
  },
  {
    type: "input",
    name: "contributions",
    message: "Contributors of the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests done on the project:",
  },
  {
    type: "input",
    name: "username",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email used for GitHub:",
  }
];

inquirer.prompt(promptArr).then((res) => {
  const template = `
  # ${res.title}

  ## Description:
  ${res.description}

  ## Installation: 
  ${res.installation}

  ## Usage:
  ${res.usage}

  ## License:
  ${res.license}

  ## Contributors:
  ${res.contributions}

  ## Tests:
  ${res.tests}

  ## Personal: 
  - GitHub: ${res.username}
  - Email: ${res.email}`;

  fs.writeFile('README.md', template, (err) => {
    if(err) {
      throw err
    } else {
      console.log('Template Generated!')
    };
  })
});