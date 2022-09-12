const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, email, name, school){
        // this.id = id;
        // this.email = email;
        // this.name = name;
        super(id, email, name);
        this.school = school;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;