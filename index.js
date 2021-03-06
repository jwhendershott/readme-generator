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
            name: 'repo',
            message: 'What is your repository URL?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are your directions for installation?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions.'
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Enter directions for contributing.',
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Provide any collaborators on the project.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What credits would you like to add?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to inlcude?',
            choices: ['MIT', 'MPL', 'GNU']
        }
    ])
    .then(({
        title,
        username,
        repo,
        description,
        installation,
        usage,
        test,
        contrib,
        collab,
        credits,
        license,
        email,
    }) => {
const format = 
        
`# ${title}
 
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Constribution](#contribution)
* [Collaboration](#collaboration)
* [Credits](#credits)
* [License](#license)
        
## Description
${repo}

![${license}](https://img.shields.io/badge/License-${license}-green)

${description}
## Installation
${installation}
## Usage
${usage}
## Test
${test}
## Contribution
${contrib}
## Collaboration
${collab}
## Credits
${credits}

## Questions
* GitHub: https://github.com/${username}
* Email: ${email}`;
writeToFile(title,format);
});

//function to write new file
function writeToFile(fileName,data){
    fs.writeFile(`README.md`,data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your document has been generated.');
    })
}