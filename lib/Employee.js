// Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns employee name
    getName() {
        return this.name;
    }

    // Returns employee ID
    getId() {
        return this.id;
    }

    // Returns employee email
    getEmail() {
        return this.email;
    }

    // Returns employee role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee; // Export the module
