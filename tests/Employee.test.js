// Using employee constructor
const Employee = require('../lib/Employee');

describe('Employee', () => {
let employee;

beforeEach(() => {
employee = new Employee('Ant-Man', 30, 'antman@avenger.com');
});

test('creates an employee object with name, id, and email', () => {
expect(employee).toEqual(expect.objectContaining({
name: expect.any(String),
id: expect.any(Number),
email: expect.any(String)
}));
});

test('returns the employee name', () => {
expect(employee.getName()).toEqual(expect.any(String));
});

test('returns the employee ID', () => {
expect(employee.getId()).toEqual(expect.any(Number));
});

test('returns the employee email', () => {
expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('returns the role of employee', () => {
expect(employee.getRole()).toEqual("Employee");
});
});