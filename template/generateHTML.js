// Card for the Manager
function generateManager(manager) {
  return `
    <div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4>
          <i class="material-icons">content_paste</i>
        </div>
        <div class="card-body">
          <p class="id">ID: ${manager.id}</p>
          <p class="email">
            Email: <a href="mailto:${manager.email}">${manager.email}</a>
          </p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
  `;
}

// Card for the Engineer
function generateEngineer(engineer) {
  return `
    <div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
          <i class="material-icons">laptop-fill</i>
        </div>
        <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">
            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
          </p>
          <p class="github">
            Github: <a href="https://github.com/${engineer.github}">
            ${engineer.github}</a>
          </p>
        </div>
      </div>
    </div>
  `;
}

// Card for the Intern 
function generateIntern(intern) {
  return `
    <div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${intern.name}</h3>
          <h4>Intern</h4>
          <i class="material-icons">assignment_ind</i>
        </div>
        <div class="card-body">
          <p class="id">ID: ${intern.id}</p>
          <p class="email">
            Email: <a href="mailto:${intern.email}">${intern.email}</a>
          </p>
          <p class="school">School: ${intern.school}</p>
        </div>
      </div>
    </div>
  `;
}

// Generate the HTML page
function generateTeamPage(employeeCards) {   
  return`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        <!-- FontsAwesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">

        <!-- CSS Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <    <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">My Team</a>
          </div>
        </nav>
      </header>
  
      <main>
        <div class="container">
          <div class="row justify-content-center" id="team-cards">
            ${employeeCards.join('')}
          </div>
        </div>
      </main>
  
      <!-- JS Bootstrap -->
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popperjs.min.js" integrity="sha384-rA9eBcU6BkUQcJD07K/l0+l+KRZMYJx/fD0F+1n6LejF6UtwlISUzQ2nNZgZnSKo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </body>
  </html>
  `;
}

module.exports = {
generateManager,
generateEngineer,
generateIntern,
generateTeamPage
};
