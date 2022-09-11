const inquirer = require("inquirer");
const Engineer = require("./library/Engineer");
const Manager = require("./library/Manager");

const managers = [];
const engineers = [];
const interns = [];

function createManager(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the mangager's name?"
    },{
        type: "input",
        name: "id",
        message: "What is the mangager's id?"
    },{
        type: "input",
        name: "email",
        message: "What is the mangager's email?"
    },{
        type: "input",
        name: "officeNum",
        message: "What is the mangager's office number?"
    },
    ]).then(function(answers){
        console.log(answers);
        const { id, email, name, officeNum } = answers;
        managers.push(new Manager(id, email, name, officeNum));
        console.log(createTeam)
        createTeam(); 
    })
}

function createEngineer(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },{
        type: "input",
        name: "id",
        message: "What is the engineer's id?"
    },{
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },{
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub username?"
    },
    ]).then(function(answers){
        console.log(answers);
        const { id, email, name, gitHub } = answers;
        engineers.push(new Engineer(id, email, name, gitHub));
        console.log(engineers);
        createTeam(); 
    });
}

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "engineer",
            message: "Please choose from the list of emploees.",
            choices: ["Engineer", "Intern", "None"]
        },
    ]).then(function(answers){
        console.log(answers);
        switch(answers.menuOption){
            case "Intern":
            // createIntern();
            break;
            case "Engineer":
            createEngineer();
            break;
            default: 
            // generateHTML();
            return;
        }
    });
}



createManager();

