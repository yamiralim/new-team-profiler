// Importing the Manager constructor from the lib folder
const Manager = require('../lib/Manager');

// Creating a Manager object
test('creates a Manager object', () => {
const manager = new Manager('Ant-Man', 30, 'antman@avenger.com', 4);

// Assertion
expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Testing getRole() method
test('gets role of employee', () => {
const manager = new Manager('Ant-Man', 30, 'antman@avenger.com');

// Assertion
expect(manager.getRole()).toEqual("Manager");
});