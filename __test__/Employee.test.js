const Employee = require("../lib/Employee");
describe("Employee Test", () => {
    it("should create a new employee object", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(typeof test).toBe("object");
    })
    it("should set an id via constructior", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.id).toEqual(1);
    })
    it("should set a name via constructior", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.name).toEqual("stan");
    })
    it("should set an email via constructior", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.email).toEqual("sitnitsky.s@gmail.com");
    })
    it("should get email via getEmail() method", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.getEmail()).toEqual("sitnitsky.s@gmail.com");
    })
    it("should get a name via getName() method", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.getName()).toEqual("stan");
    })
    it("should get id via getId() method", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.getId()).toEqual(1);
    })
    it("should get role via getRole() method", () => {
        const test = new Employee(1, "sitnitsky.s@gmail.com", "stan"); 
        expect(test.getRole()).toEqual("Employee");
    })
})

