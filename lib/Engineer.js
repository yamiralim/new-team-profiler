// Importing Employee constructor
const Employee = require('./Employee');

// Engineer constructor extends Employee constructor 
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call the Employee constructor
    super(name, id, email);

    // Set the Github username
    this.github = github;
  }

  // Return the Github username from input 
  getGithub() {
    return this.github;
  }

  // Override the employee role to Engineer
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer constructor
module.exports = Engineer;