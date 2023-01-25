# CH_11_Team_Profile_Generator

## Decription
-  A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
-  Takes user input about their employees including the Manager, Engineer, and Intern.
- Includes a few description prerequsites along with a hyperlink for their email adress. 
-  Includes a unit test for every part of your code and ensure that it passes each test.
- Include a hyperlink to the Engineer's Github Profile. 
- Generate a HTML page based on the users input which has cards for each employee and their particular information and contact links.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN prompted for team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN you click on an email address in the HTML
THEN your default email program opens and populates the TO field of the email with the address

WHEN you click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN you start the application
THEN you are prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN you enter the team manager’s name, employee ID, email address, and office number
THEN you are presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN you select the engineer option
THEN you are prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.

WHEN you select the intern option
THEN you are prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.

WHEN you decide to finish building my team
THEN you exit the application, and the HTML is generated
```
## Commands Used 
```bash
node index.js
```
## Languages Used
Javascript, NodeJS, HTML, CSS

## Developer
Drum Holliday

## Video Demonstration

https://user-images.githubusercontent.com/107374333/189823900-9eddb658-1696-4613-af11-edc89e65130a.mp4

