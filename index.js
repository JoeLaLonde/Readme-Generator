// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Instalation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributers?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'github profile?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
