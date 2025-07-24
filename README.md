# Parabank-Final

This project contains automated end-to-end test cases for [Parabank](https://parabank.parasoft.com/) using Cypress.

---

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Cypress](https://www.cypress.io/) installed as a dev dependency

### Installation

1. Clone this repository
2. Install dependencies

### Requirements Coverage

| Feature               | Tools / Methods Used                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `.type()`             | Used in: `register`, `openaccount`, `updateinfo`, `transferfunds`, `billpay`, `findtransactions`, `requestloan` |
| `fixture`             | Used in: `register.cy.js`, `updateinfo.cy.js`, `billpay.cy.js`, `openaccount.cy.js`                             |
| `faker-utils`         | Used in: `registration.cy.js`                                                                                   |
| **Page Object Model** | Used in: `logout.cy.js`                                                                                         |
| **Custom Commands**   | Used in all Cypress files except `registration.cy.js` and `logout.cy.js` (defined in `commands.js`)             |
| **NPM scripts**       | Used in: `package.json`                                                                                         |

### Running the Tests
To run the tests, enter the following lines in the Command Line Interface (Terminal):

**1. Headed Mode**
   
      npx cypress run --spec 'cypress/e2e/registration.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/register.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/overview.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/openaccount.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/transferfunds.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/billpay.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/findtransactions.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/updateinfo.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/requestloan.cy.js' --browser chrome --headed
      npx cypress run --spec 'cypress/e2e/parabank/logout.cy.js' --browser chrome --headed

**2. Headless Mode**
   
      npx cypress run --spec 'cypress/e2e/registration.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/register.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/overview.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/openaccount.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/transferfunds.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/billpay.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/findtransactions.cy.js
      npx cypress run --spec 'cypress/e2e/parabank/updateinfo.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/requestloan.cy.js'
      npx cypress run --spec 'cypress/e2e/parabank/logout.cy.js'

### Features

| Feature            | Description                     | File/s                                        |
| ------------------ | ------------------------------- | ------------------------ ---------------------|
| Registration       | Register a new user             | `registration.cy.js` and `register.cy.js`     |
| Open Account       | Open a new bank account         | `openaccount.cy.js`                           |
| Overview           | Account overview                | `overview.cy.js`                              |
| Update Info        | Update user profile             | `updateinfo.cy.js`                            |
| Transfer Funds     | Transfer money between accounts | `transferfunds.cy.js`                         |
| Bill Pay           | Pay bills using bank account    | `billpay.cy.js`                               |
| Find Transaction   | Find transactions by criteria   | `findtransactions.cy.js`                      |
| Loan Request       | Submit a loan application       | `requestloan.cy.js`                           |
| Logout             | User login and logout           | `logout.cy.js`                                |

### Notes
- `registration.cy.js` and `register.cy.js` are different files.
  - `registration.cy.js` utilizes the faker util data
  - `register.cy.js` utilizes the fixture data
- Only `logout.cy.js` utilizes POM while the rest of the codes' functionality references the custom Cypress commands (`commands.js`)
  - In case there needs to be more POM examples, I added the POM files for Registration, Open Account, and Update Info under the **pages folder**, the Cypress files only need to be modified to reference the POM files.
- Screenshots are automatically taken before and after key test steps (if screenshotWithDate custom command is used).
- `commands.js` contains reusable Cypress commands for code clarity and reuse.

