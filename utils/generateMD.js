// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    // Extract the license type from the 'license' parameter
    if (license !== 'none') { 
      return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    } 
    return '';
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Extract the license type from the 'license' parameter
  if (license !== 'none') { 
    return `- [License](#license)`
    
  } 
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License\nthis project is licensed under the ${license}.`;
  }
  return '';
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}

## Discription
### ${answers.discription}

## Table of Contents

- [Installation](#installation-processes)
- [Usage](#app-usage)
- [Tests](#testing)
${renderLicenseLink(answers.license)}
- [contributors](#contributors)

## Installation Processes
### ${answers.installation}

## App Usage
### ${answers.usage}

${renderLicenseSection(answers.license)}

## Contributors
### ${answers.contributors}
## Testing
### ${answers.tests}

## Questions
### If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. If youwant to see more of my work, please visit my [${answers.Github}](https://github.com/${answers.Github})
`;
}

module.exports = generateMarkdown;
