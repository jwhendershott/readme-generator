// Set global variables

const inquirer = require('inquirer');
const fs = require('fs');

// Provides prompts for user input
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'repot',
            message: 'What is your repository name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {
            //Allows user to check what they would like to include in Table of Contents
            type: 'checkbox',
            name: 'table of contents',
            message: 'What would you like to include in your Table of Contents?',
            choices: ['Installation', 'Usage', 'Credits', 'License'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are your directions for installation?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What credits would you like to add?',
        },
        {
            //Provides list of licenses
            type: 'list',
            name: 'license',
            message: 'Which license would you like to inlcude?',
            choices: ['MIT', 'MPL', 'GNU GPLv3', 'Other']
        }
    ])
