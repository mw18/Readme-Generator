var inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
      // array of questions for user
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project/app?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe the project and explain why the project exists.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install the app by providing step by step series of examples and explanations about how to get a development running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots if needed.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the license (MIT, Apache etc)',
        choices: [ 'MIT','Other', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.',
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
        name: 'github',
        message: 'GitHub username:',
      },
      {
        type: 'input',
        name: 'giturl',
        message: 'GitHub profile link',
      },
      {
        type: 'input',
        name: 'email',
        message: 'email:',
      },
      
  ])

  .then((response) => {
    console.log('response', response);
    
    const userInput = `
  
  # Title:  ${response.title}
  
  ## Description: 
  ${response.description} 
  
  ## Table of Contents: 
  [Installation](#installation)|
  [Usage](#usage)|
  [License](#license)|
  [Contributing](#contributing)|
  [Credits](#credits)|
  [Tests](#tests)|
  [Github](#github)|
  [Giturl](#giturl)|
  [Email](#email)|

  ## Installation: 
  ${response.installation} 

  ## Useage: 
  ${response.usage}

  ## License: 
  ${response.license}

  ## Contributing: 
  ${response.contributing}
  
  ## Credits: 
  ${response.credits}

  ## Tests: 
  ${response.tests}

  ## Questions: 
  - Github username: ${response.github}
  - GitHub profile link: ${response.giturl}
  - Email: ${response.email}
  
  `;

    fs.writeFile('README.md', userInput, (err) => {
        if (err) throw err;
        console.log ('Your answers are saved')

});

})