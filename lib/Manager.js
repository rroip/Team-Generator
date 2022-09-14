const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, name, officeNum){
        super(id, email, name);
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    };
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;