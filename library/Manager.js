const Employee = require("./Employee");

class Manager extends Employee {
    constactor(id, email, name, officeNum){
        this.id = id;
        this.email = email;
        this.name = name;
        this.officeNum = officeNum;
    }
}

module.exports = Manager;