const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, name, officeNum){
        // this.id = id;
        // this.email = email;
        // this.name = name;
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