const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

// TODO: Create a function to generate markdown for README
const generateReadMe = (answers) => {
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
  
  # Usage

  # License
  
  # Contributing
  
  # Tests

  # Questions

  For any questions, please reach out to me on GitHub at ${answers.github}, or email me at ${answers.email}!
  `;
}

const writeToFile = (md, name) => {
  try {
      fs.writeFileSync('title.md', md);
      console.log('Success!')    
  } catch(err){
      console.log(err);
  }
}

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
    message: 'Please enter your GitHub Account',
    name: 'github'
  },
  {
    message: 'Please enter your email address',
    name: 'email'
  }
  ])

  .then(generateReadMe)
.then(writeToFile)
