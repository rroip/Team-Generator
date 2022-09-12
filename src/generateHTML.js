const generateTeam = function (managers, engineers, interns) {
    let html = "";
    function generateManagerHTML(managers) {
        
        managers.forEach(manager => {
            console.log(manager);
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
    console.log(html);
     });
    }
    generateManagerHTML(managers);
    return html
}

const generateHTML = function(managers, engineers, interns) {
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
           ${generateTeam(managers, engineers, interns)}
        </section>
    
        
    </main>


</body>

</html>
`;
}

module.exports = generateHTML;