const Engineer = require("../lib/Engineer");

it("can get tole via getRole() method", () => {
    const test = new Engineer(1, "sitnitsky.s@gmail.com", "stan");
    expect(test.getRole()).toEqual("Engineer");
})

it("can set a GitHub via constructor", () => {
    const test = new Engineer(1, "sitnitsky.s@gmail.com", "stan", "gitHub");
    expect(test.gitHub).toEqual("gitHub");
})

it("can get an gitHub via getGitHub method", () => {
    const test = new Engineer(1, "sitnitsky.s@gmail.com", "stan", "gitHub");
    expect(test.getGitHub()).toEqual("gitHub");
})