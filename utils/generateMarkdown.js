const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

// TODO: Create a function to generate markdown for README
const generateReadMe = (answers) => {
  return `# ${answers.name}`;
}

const writeToFile = (md, name) => {
  try {
      fs.writeFileSync('name.md', md);
      console.log('Success!')    
  } catch(err){
      console.log(err);
  }
}

prompt([
  {
      message: 'What is your name?',
      name: 'name'
  }
  ])

  .then(generateReadMe)
.then(writeToFile)
// module.exports = generateMarkdown;