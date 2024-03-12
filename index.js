// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        
        type: 'input',
        name: 'title',
        message: 'Please provide a title to your READme.md'
    },
    {
        type: 'input',
        name: 'discription',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?`
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Show us around by writing your table of contents. (Optional)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of how to use your application. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide any licenses for your application. This lets other developers know what they can and cannot do with your project.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: `List your collaborators, if any, with links to their GitHub profiles.

        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        
        If you followed tutorials, include links to those here as well.`
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to test your application. Include screenshots as needed.'
    }

]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
}

// TODO: Create a function to initialize (or "RUN") app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const template = generateMarkdown(answers);
            writeToFile('generatedReadMe.md', template);
        })
}

// Function call to initialize app
init();
