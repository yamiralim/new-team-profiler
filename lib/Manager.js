// Importing Employee constructor 
const Employee = require('./Employee');

// Manager constructor extends Employee constructor 
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call the Employee constructor
    super(name, id, email);

    // Set the office number
    this.officeNumber = officeNumber;
  }

  // Override the employee role to Manager
  getRole() {
    return 'Manager';
  }
}

// Export the Manager constructor
module.exports = Manager;
