const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an Engineer object with name, id, email, and GitHub username", () => {
      const engineer = new Engineer('Ant-man', 30, 'antman@avenger.com', 'antman');
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  });

  describe("getGithub", () => {
    it("should return the Engineer's GitHub username", () => {
      const engineer = new Engineer('Ant-man', 30, 'antman@avenger.com', 'antman');
      expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer('Ant-man', 30, 'antman@avenger.com', 'antman');
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
