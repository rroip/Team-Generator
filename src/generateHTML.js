
const generateTeam = function (team) {
    let html = "";


    team.managers.forEach(manager => {

        html += `
    <div class="col-md-4">
    <div class="card col-md-4" style="width: 18rem;">
    <div class="card bg-light">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color: white">
            <h2>${manager.getName()}</h2>
            <h4><i class="fas fa-coffee"></i> Manager</h4>
        </div>
       
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
        </ul>
        
        </div>
    </div>
    </div>
    `;
    });

    team.engineers.forEach(engineer => {
        html += `
        <div class="col-md-4">
        <div class="card col-md-4" style="width: 18rem;">
        <div class="card bg-light">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color:white;">
            <h2>${engineer.getName()}</h2>
            <h4><i class="fas fa-glasses"></i> Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub username:<a href="https://github.com/${engineer.getGitHub()}/"> ${engineer.getGitHub()}</a></li>
        </ul>
        
        </div>
    </div>
    </div>
        `;
    });

    team.interns.forEach(intern => {
        html += `
        <div class="col-md-4">
        <div class="card col-md-4" style="width: 18rem;">
        <div class="card bg-light">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color:white;">
            <h2>${intern.getName()}</h2>
            <h4><i class="fas fa-user-graduate"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
            <li class="list-group-item">School Name: ${intern.getSchool()}</li>
        </ul>
        
        </div>
    </div>
    </div>
        `
    })

    return html;
}


const generateHTML = function (team) {
    // console.log(team);
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <title>My Team</title>
</head>

<body>
    <header class="container-fluid text-center p-5" style="background-color: rgba(255, 0, 0, 0.859); color:white;">
        <h1>My Team</h1>
    </header>
    <main class="align-items-center p-5">
        <section class="row d-flex justify-content-center">
        
           ${generateTeam(team)}
         
       </section>
    
        
    </main>


</body>

</html>
`;
}

module.exports = generateHTML;