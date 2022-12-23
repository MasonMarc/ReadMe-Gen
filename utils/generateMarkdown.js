const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = (answers) => {
  chooseLicense(answers);
  return `# ${answers.title}
  
  # Descriptions
  
  ${answers.description}
  
  # Table of Contents
  
  [Descriptions](#descriptions)
  
  [Installation](#Installation)
  
  [Usage](#Usage)
  
  [License](#License)
  
  [Contributing](#Contributing)
  
  [Tests](#Tests)
  
  [Questions](#Questions)
  
  
  # Installation
  
  ${answers.install}
  
  # Usage
  
  ${answers.usage}
  
  # License

  ${answers.license} : ` + liLink + `
  
  # Contributing
  
  ${answers.contribute}
  
  # Tests
  
  ${answers.test}
  
  
  # Questions
  
  For any questions, please reach out to me on GitHub at [${answers.github}](https://github.com/${answers.github}), or email me at ${answers.email}!
  `;
}

const saveFile = (md) => {
    fs.writeFileSync('readme.md', md);   
}

let liLink = '';

const chooseLicense = (answers) => {
  if (answers.license == 'Mozilla') {
    liLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } 
  else if (answers.license == 'MIT') {
    liLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}
  else if (answers.license == 'Creative Commons') {
    liLink = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
}
  else if (answers.license == 'Boost') {
    liLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
}
  else if (answers.license == 'Apache') {
    liLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
}
return liLink;
}

const prompt = inquirer.createPromptModule();
prompt([
  {
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    message: 'Please enter a description for your project',
    name: 'description'
  },
  {
    message: 'Please enter installation instructions for your project',
    name: 'install'
  },
  {
    message: 'Please enter usage information for your project',
    name: 'usage'
  },
  {
    message: 'Please enter contribution guidelines for your project',
    name: 'contribute'
  },
  {
    message: 'Please enter test instructions for your project',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Please choose License used',
    choices: ['Apache', 'Boost', 'Creative Commons', 'MIT', 'Mozilla'],
    name: 'license'
  },
  {
    message: 'Please enter your GitHub Account',
    name: 'github'
  },
  {
    message: 'Please enter your email address',
    name: 'email'
  }
  ])

.then(generateReadMe)
.then(saveFile)


// Video
// License

