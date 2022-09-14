const Manager = require("../lib/Manager");

it("can get tole via getRole() method", () => {
    const test = new Manager(1, "sitnitsky.s@gmail.com", "stan");
    expect(test.getRole()).toEqual("Manager");
})

it("can set an officeNum via constructor", () => {
    const test = new Manager(1, "sitnitsky.s@gmail.com", "stan", "officeNum");
    expect(test.officeNum).toEqual("officeNum");
})

it("can get an officeNum via getOfficeNum method", () => {
    const test = new Manager(1, "sitnitsky.s@gmail.com", "stan", "officeNum");
    expect(test.getOfficeNum()).toEqual("officeNum");
})