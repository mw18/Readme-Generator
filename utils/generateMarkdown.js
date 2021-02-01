// function to generate markdown for README
function generateMarkdown(data) {
  const licenseLowerCase = data.license.toLowerCase();
  return `
  # ${data.title} ${data.version}
  ![Badge](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
  ${data.description}
  Deployed Application: [${data.url}](${data.url})
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  Copyright &#169; 2020 [@${data.username}](https://github.com/${data.username}).<br>
  This project is [${data.license}](https://choosealicense.com/licenses/${licenseLowerCase}/) licensed.
  
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  For more information, here is a link to GitHub
  [@${data.username}](https://github.com/${data.username})<br>
  Please email me with any further questions! <${data.email}>
  _____________________________________________________
  > *This README was generated with ❤️ by [readme-generator](https://github.com/mw/README-generator)*
`;
}

module.exports = generateMarkdown;