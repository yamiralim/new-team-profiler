const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Ant-man', 30, 'antman@avenger.com', 'USP');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
  const intern = new Intern('Ant-man', 30, 'antman@avenger.com', 'USP');
  
  expect(intern.getSchool()).toEqual(intern.school);
});

test('gets role of intern', () => {
  const intern = new Intern('Ant-man', 30, 'antman@avenger.com', 'USP');

  expect(intern.getRole()).toEqual("Intern");
});
