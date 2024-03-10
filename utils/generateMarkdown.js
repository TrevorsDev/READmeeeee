// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Extract the license type from the 'license' parameter
  let licenseType = license.license;

  // Initialize a variable to store the license badge string
  let yourLicense = '';

  // Check the license type and assign the corresponding badge string
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else {
    // If the license type is not recognized, set it to "N/A"
    license.license = "N/A";
  }

  // Return the license badge string
  return yourLicense;
}

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
