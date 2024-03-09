// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## ${Discription}
  ### ${answers.discription}

  ## ${'Table of Contents'}
  ### ${answers.tableOfContents}

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

  ## Installation Processes
  ### ${answers.installation}

  ## App Usage
  ### ${answers.usage}

  ## Licenses
  ### ${answers.license}

  ## Contributors
  ### ${answers.contributors}

  Testing
  ### ${answers.tests}
`;
}

module.exports = generateMarkdown;
