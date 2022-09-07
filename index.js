// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'Table Of Contents',
        message: 'Table of Contents?',
    },
    {
        type: 'input',
        name: 'Instalation',
        message: 'Instalation?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'License?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Contributers?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Contact info?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
