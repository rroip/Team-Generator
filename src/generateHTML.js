
const generateTeam = function (team) {
    let html = "";


    team.managers.forEach(manager => {

        html += `
    <div class="card cal" style="width: 18rem;">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color:white;">
            <h2>${manager.getName()}</h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
        </ul>
    </div>
    `;
    });

    team.engineers.forEach(engeneer => {
        html += `
        <div class="card cal" style="width: 18rem;">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color:white;">
            <h2>${engeneer.getName()}</h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engeneer.getId()}</li>
            <li class="list-group-item">Email: ${engeneer.getEmail()}</li>
            <li class="list-group-item">GitHub username: ${engeneer.getGitHub()}</li>
        </ul>
    </div>
        `;
    });

    team.interns.forEach(intern => {
        html += `
        <div class="card cal" style="width: 18rem;">
        <div class="card-header" style="background-color:rgba(0, 0, 255, 0.738); color:white;">
            <h2>${intern.getName()}</h2>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School Name: ${intern.getSchool()}</li>
        </ul>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>My Team</title>
</head>

<body>
    <header class="container-fluid text-center p-5" style="background-color: rgba(255, 0, 0, 0.859); color:white;">
        <h1>My Team</h1>
    </header>
    <main class="container text-center p-5">
        <section class="row">
           ${generateTeam(team)}
        </section>
    
        
    </main>


</body>

</html>
`;
}

module.exports = generateHTML;