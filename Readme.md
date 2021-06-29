This is a prototype code base that is created using Playwright and Cucumber.
The framework performs automated test cases validation, provided in the task.
All the prerequisites can be installed via npn install while in the project structure, which will proceed to download and install all the required items.
It is still in its early stages and the purpose is to provide a POC. A few features still need fine tuning and will be provided in the upcoming iterations.

The project runs via the command "npx cucumber-js"

In the limited time , I incorporated POM , but it is partially implemented. 
Selectors are not stored in variables currently , in the upcoming iterations, selectors will be exported to a seperate file.
Currently At times I have used Xpaths rather than ids or class for element location. I am currently new to Playwright and I wanted to use playwrights buil in methods for element location as well rather than using webdriver find elements (which btw are still possible in playwright).
The Job search feature was not implemented properly as the provided scenario demanded an already exisiting working profile which I did not have. So I improvised and perfomed basic functionality (search) with the restricted profile I had.
Due to time constraints I did not yet implement the use of enviornment variables for credentials, Rather included them in feature file. In the upcoming Iteration that will be fixed.


The code base includes:
A "cucumber.js" file:
- The purpose of this file is to include/require all dependent Playwright and feature files.
A "Runner.js":
- This file contains tear down and start up methods, what important steps should be performed at both points of the execution.
A Steps file:
- The steps file contains code that interacts with cucumber scenarios and performs actions and validations accordingly.
Feature Files:
- Contains Cucumber scenarios.
A "Login.page.js":
- A helper file containing functions , In accordance with POM , this helps improve code cleanliness and readablity.