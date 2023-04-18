// Require the necessary modules at the beginning of the file
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./template/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Define an empty team array to hold the team members
const teamArray = [];

// Prompt for the Manager's information
const promptManager = () => {
console.log(`'Please enter the Manager's information:'`);
return inquirer.prompt([
{
type: 'input',
name: 'name',
message: 'Name:',
validate: input => input.trim() !== '' || 'Please enter a name',
},
{
type: 'input',
name: 'id',
message: 'ID:',
validate: input => /^\d+$/.test(input) || 'Please enter a number',
},
{
type: 'input',
name: 'email',
message: 'Email address:',
validate: input => /\S+@\S+.\S+/.test(input) || 'Please enter a valid email address',
},
{
type: 'input',
name: 'officeNumber',
message: 'Office number:',
validate: input => /^\d+$/.test(input) || 'Please enter a number',
},
]);
};

// Prompt for an employee's information
const promptEmployee = () => {
console.log(`'Please enter an employee's information:'`);
return inquirer.prompt([
{
type: 'list',
name: 'role',
message: 'Select a role:',
choices: ['Engineer', 'Intern'],
},
{
type: 'input',
name: 'name',
message: 'Name:',
validate: input => input.trim() !== '' || 'Please enter a name',
},
{
type: 'input',
name: 'id',
message: 'ID:',
validate: input => /^\d+$/.test(input) || 'Please enter a number',
},
{
type: 'input',
name: 'email',
message: 'Email address:',
validate: input => /\S+@\S+.\S+/.test(input) || 'Please enter a valid email address',
},
{
type: 'input',
name: 'github',
message: 'GitHub username:',
when: input => input.role === 'Engineer',
validate: input => input.trim() !== '' || 'Please enter a username',
},
{
type: 'input',
name: 'school',
message: 'School:',
when: input => input.role === 'Intern',
validate: input => input.trim() !== '' || 'Please enter a school name',
},
{
type: 'confirm',
name: 'addMore',
message: 'Do you want to add more team members?',
default: false,
},
]);
};

// Add a manager to the team array
const addManager = async () => {
const answers = await promptManager();
const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
teamArray.push(manager);
console.log(`${manager.getName()} added to the team`);
};

// Add an employee to the team array
const addEmployee = async () => {
const answers = await promptEmployee();
const { name, id, email, role, github, school } = answers;
let employee;

if (role === 'Engineer') {
employee= new Engineer(name, id, email, github);
} else {
employee = new Intern(name, id, email, school);
}

teamArray.push(employee);
console.log(`${employee.getName()} added to the team`);
if (answers.addMore) {
await addEmployee();
} else {
generateHTML(teamArray);
}
};

// Call the addManager function to start the application
addManager()
.then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });