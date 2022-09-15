const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

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
        console.log(managers);
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

function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },{
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },{
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },{
            type: "input",
            name: "school",
            message: "What is the intern's school name?"
        },
        ]).then(function(answers){
            console.log(answers);
            const { id, email, name, school } = answers;
            interns.push(new Intern(id, email, name, school));
            console.log(interns);
            createTeam(); 
        });
};

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "menuOption",
            message: "Please choose from the list of emploees you'd like to add.",
            choices: ["Engineer", "Intern", "None"]
        },
    ]).then(function(answers){
        console.log(answers);
        switch(answers.menuOption){
            case "Intern":
            createIntern();
            break;
            case "Engineer":
            createEngineer();
            break;
            default: 
            fs.writeFileSync("./dist/team.html", generateHTML({ managers, engineers, interns }));
            return;
        }
    });
}



createManager();

