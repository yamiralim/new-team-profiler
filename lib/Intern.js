// Importing Employee constructor
const Employee = require('./Employee');

// Intern constructor extends Employee constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // Call the Employee constructor
        this.school = school; 
    }

    // Return the school from input 
    getSchool() {
        return this.school;
    }

    // Override the employee role to Intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern; // Export the Intern constructor
