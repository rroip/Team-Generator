const Intern = require("../lib/Intern");

it("can get tole via getRole() method", () => {
    const test = new Intern(1, "sitnitsky.s@gmail.com", "stan");
    expect(test.getRole()).toEqual("Intern");
})

it("can set a school via constructor", () => {
    const test = new Intern(1, "sitnitsky.s@gmail.com", "stan", "school");
    expect(test.shcool).toEqual("school");
})

it("can get school via getSchool method", () => {
    const test = new Intern(1, "sitnitsky.s@gmail.com", "stan", "school");
    expect(test.getSchool()).toEqual("school");
})