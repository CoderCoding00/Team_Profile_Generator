// If data.employee is an Employee render Employee HTML Card.
// If data.employee is an Engineer render Engineer HTML Card. 
// If data.employee is an Intern render Intern HTML Card.
// If data.employee is an Manager render Manager HTML Card.


//Create a function to generate markdown for HTML
// Convert User Input to HTML
function generateMarkdown(people) {
  var html = "";
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let role = person.getRole();
    let name = person.getName();
    let id = person.getId();
    let email = person.getEmail();


    if (role === "Manager") {
        html += `
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${role}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office number: ${person.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        // For Engineer add the Githun username hyperlink to Github profile
    } else if (role === "Engineer") {
        html += `
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${role}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${person.getGithub()}" target="_blank" rel="noopener noreferrer">${person.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    } else if (role === "Intern") {
        html += `
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${role}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">School: ${person.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }   
}

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="./dist/style.css">
      <link rel="stylesheet" href="https://fonts.google.com/specimen/Poppins/tester">
  </head>
  <body>
      <div class="jumbotron jumbotron-fluid bg-danger text-white">
          <div class="container">
              <h1 class="display-4 text-center">My Team</h1>
          </div>
      </div>
      <div class="container">
          <div class="row">
          ${html}
          </div>
          </div>
    </body>
    </html>

    `;
}

module.exports = generateMarkdown;

