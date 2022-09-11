const Employee = require("./Employee");

class Engineer extends Employee {
    constactor(id, email, name, gitHub){
        this.id = id;
        this.email = email;
        this.name = name;
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;