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
            //Allows user to check what they would like to include in Table of Contents
            type: 'checkbox',
            name: 'contents',
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
            //Provides list of licenses
            type: 'list',
            name: 'license',
            message: 'Which license would you like to inlcude?',
            choices: ['MIT', 'MPL', 'GNU GPLv3', 'Other/Write My Own']
        }
    ])
    .then(({
        title,
        username,
        repo,
        description,
        contents,
        installation,
        usage,
        test,
        contrib,
        collab,
        credits,
        license,
    }) => {
        const format = 
        
        `# ${title}
        
        *[Description](#description)
        *[contents](#contents)
        *[installation](#installation)
        *[usage](#usage)
        *[test](#test)
        *[constribution](#contribution)
        *[collaboration](#collaboration)
        *[credits](#credits)
        *[license](#license)
        
        ## Description
        ${repo}
        ${description}
        ## Contents
        ${contents}
        ## Installation
        ${installation}
        ## Usage
        ${usage}
        ## test
        ${test}
        ## Contribution
        ${contrib}
        ## Collaboration
        ${collab}
        ## Credits
        ${credits}
        ## Lincense
        ${license}

        # Questions
        *GitHub: ${username}
        *Email: ${email}`;
        newFile(title,format);
});

//function to write new file
function newFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ')}.md`,data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your document has been generated.');
    })
}