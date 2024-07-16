# YouNoodle Application Form

## Overview
This application is designed to manage and display user responses through two main views: a form view and a table view. It utilizes React for front-end development, integrating Material-UI components for enhanced UI design and functionality.

## Functionality

### Form View
The form view is used to collect user information including name, age, email, and interests. It features validation using yup, a schema validation library for JavaScript.

#### How to Use
Navigate to Form View: Click on the "Form" link in the side menu.
Fill Out the Form:
Enter your name, ensuring it meets the required length criteria.
Provide your age, ensuring it falls within a valid range.
Input your email address, which must be in a valid email format.
Select at least one interest from the checkboxes provided.
Submit: Click on the "Submit" button to save your information.

### Table View
The table view displays the collected information in a structured format, making it easy to review and manage user responses. 
The table should have a delete and an edit icon associated with it. Click on delete icon to clean the information filled and the edit icon to be redirect to the form to edit the information.

#### How to Use
Navigate to Table View: Click on the "Table" link in the side menu.
View Responses: The table will display the previously submitted user responses.

## Installation
After forking or duplicating the repository, follow these steps to set up the project on your local machine:

1. Navigate to the project's root directory
1. Make sure you are using Node >= 18
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the Application: Open your web browser and navigate to http://localhost:3000 to view the application.
  
