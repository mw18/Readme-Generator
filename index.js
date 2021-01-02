const inquirer = require('inquirer');
const markdownModule = require('./utils/generateMarkdown');
const fs = require('fs');

const questions =[

   // array of questions for user
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
   {
    type: 'input',
    name: 'description',
      message: 'Describe the project and explain why the project exists.',
   },
   {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
   },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license below',
      choices: [ 'MIT','Other', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add guidelines for how others can contribute to the project.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe and show how to run the tests with code examples.',
    },
    {
      type: 'input',
      name: 'username',
      message: 'GitHub username:',
    },
    {
      type: 'input',
      name: 'giturl',
      message: 'GitHub profile link',
    },
    {
      type: 'input',
      name: 'url',
      message: 'What is the URL? of the deployed project?',
    },

    {
      type: 'input',
      name: 'email',
      message: 'email:',
    },
 ];

 // function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + ".md", markdownModule(data), function(err) {
    if(err) { 
      console.log(err); 
    }
    else {
      console.log("NEW.md file had been created. Success!");
    }
  })
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
  .then(responses =>
    {
      writeToFile('NEW', responses);
    })
    .catch(error => {
      if(err) {
        console.log(err);
      } else {
        // Something else when wrong
        console.log(err);
      }
    });
}

// function call to start program
init();