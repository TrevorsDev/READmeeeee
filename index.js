// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMD')
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
        message: `Provide a short description of your project. Include screenshots as needed.`
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
        type: 'list',
        name: 'license',
        message: 'Please provide any licenses for your application. This lets other developers know what they can and cannot do with your project.',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'Mozilla Public License 2.0',
            'none']
    },
    {
        type: 'input',
        name: 'contributors',
        message: `List your collaborators, if any, with links to their GitHub profiles.`
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to test your application. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email.'
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
