// Include packages etc.. needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { exit } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


// Prompted to enter the team manager’s name, employee ID, email address, and office number
const managerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
    },
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is employee ID of the manager?',
    },
    {
        type: 'input',
        name: 'email_address',
        message: 'What is the email address for the manager?',
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'What is the office number for the manager?',
    },


];

// Prompt to enter the engineer questions, with gitbub username.
const enginerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?',
    },
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is employee ID of the engineer?',
    },
    {
        type: 'input',
        name: 'email_address',
        message: 'What is the email address for the engineer?',
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'What is the github user name of the engineer?',
    },

];

// Prompted to enter the intern questions, with school name.

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?',
    },
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is employee ID of the intern?',
    },
    {
        type: 'input',
        name: 'email_address',
        message: 'What is the email address for the intern?',
    },
    {
        type: 'input',
        name: 'school_name',
        message: 'What is the name of the school the intern attends?',
    },
];

// Only choices needed are Enginer, Intern, and Finish 
// (manager is already done above b/c there will always be a manager)
const menuQuestions = [
    {
        type: 'list',
        name: 'choice',
        message: 'Select to add a manager, engineer, intern or to finish building the team?',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
]

const people = [];

function askEngineerQuestions() {
    inquirer.prompt(enginerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.employee_id, answers.email_address, answers.github_username)
        // answers.role = "Engineer";
        people.push(engineer);
        console.log(people);
        askMenuQuestions();
    });
}

function askInternQuestions() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.name, answers.employee_id, answers.email_address, answers.school_name)
        // answers.role = "Intern";
        people.push(intern);
        console.log(people);
        askMenuQuestions();
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully wrote: ' + fileName);
    });
}

function generateHTML() {
    writeToFile('TEST_HTML.html', generateMarkdown(people));
} 

function askMenuQuestions() {
    inquirer.prompt(menuQuestions).then((answers) => {
        switch (answers.choice) {
            case 'Engineer':
                askEngineerQuestions();
                break;
            case 'Intern':
                askInternQuestions();
                break;
            case 'Finish':
                generateHTML();
                break;
                // exit (0) means success
                // exit(0);
                // break;
                // default in case nothing is selected and exit(1) means failure
            // default:
            //     exit(1);
            //     break;
        }
    });
}


function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.employee_id, answers.email_address, answers.office_number)
        // manager.role = "Manager";
        people.push(manager);
        console.log(people);
        // automatically resolves with nothing
    }).then(() => {
        askMenuQuestions();
    })
}

// Initialize app
init();

