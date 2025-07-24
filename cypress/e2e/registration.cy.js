///<reference types="cypress" />

import {userData } from "../support/utils/parabankUtils";

// import { slowCypressDown } from 'cypress-slow-down';
// slowCypressDown(500, 100);

describe('Register Test Suite', () => {
    beforeEach(() => {
        // Visit the registration page before each test
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    })
    it('Verify Registration Page Elements', () => {
        // Verify URL
        cy.url().should('include', '/register.htm');

        // Verify Company Logo
        cy.get('.logo').should('be.visible');
        cy.get('.caption').should('contain', 'Experience the difference');
        cy.get('.admin').should('be.visible');
        cy.get('#headerPanel').should('be.visible');
        cy.get('.home > a').should('be.visible');
        cy.get('.aboutus > a').should('be.visible');
        cy.get('.contact > a').should('be.visible');

        //Verify Hamburger Menu
        cy.get('.Solutions').should('have.text', 'Solutions');
        cy.get('.leftmenu > :nth-child(2) > a').should('have.text', 'About Us');
        cy.get('.leftmenu > :nth-child(3) > a').should('have.text', 'Services');
        cy.get('.leftmenu > :nth-child(4) > a').should('have.text', 'Products');
        cy.get('.leftmenu > :nth-child(5) > a').should('have.text', 'Locations');
        cy.get('.leftmenu > :nth-child(6) > a').should('have.text', 'Admin Page');


        // Verify elements on the registration page
        cy.get('h1.title').should('contain', 'Signing up is easy!');
        cy.get('#rightPanel > p').should('have.text','If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.');
        cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:');
        cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
        cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
        cy.get(':nth-child(4) > [align="right"] > b').should('have.text', 'City:');
        cy.get(':nth-child(5) > [align="right"] > b').should('have.text', 'State:');
        cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
        cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'Phone #:');
        cy.get(':nth-child(8) > [align="right"] > b').should('have.text', 'SSN:');
        cy.get(':nth-child(10) > [align="right"] > b').should('have.text', 'Username:');
        cy.get(':nth-child(11) > [align="right"] > b').should('have.text', 'Password:');
        cy.get(':nth-child(12) > [align="right"] > b').should('have.text', 'Confirm:');

        //Verify input fields
        cy.get('input[id="customer.firstName"]').should('be.visible');
        cy.get('input[id="customer.lastName"]').should('be.visible');
        cy.get('input[id="customer.address.street"]').should('be.visible');
        cy.get('input[id="customer.address.city"]').should('be.visible');
        cy.get('input[id="customer.address.state"]').should('be.visible');
        cy.get('input[id="customer.address.zipCode"]').should('be.visible');
        cy.get('input[id="customer.phoneNumber"]').should('be.visible');
        cy.get('input[id="customer.ssn"]').should('be.visible');
        cy.get('input[id="customer.username"]').should('be.visible');
        cy.get('input[id="customer.password"]').should('be.visible');
        cy.get('input[id="repeatedPassword"]').should('be.visible');

        cy.get('input[value="Register"]').should('be.visible');

    })

   it('Verify Successful Registration', () => {
    const users = userData();
    cy.get('input[id="customer.firstName"]').should('be.visible').type(users.firstName);
    cy.get('input[id="customer.lastName"]').should('be.visible').type(users.lastName);
    cy.get('input[id="customer.address.street"]').should('be.visible').type(users.address);
    cy.get('input[id="customer.address.city"]').should('be.visible').type(users.city);
    cy.get('input[id="customer.address.state"]').should('be.visible').type(users.state);
    cy.get('input[id="customer.address.zipCode"]').should('be.visible').type(users.zipCode);
    cy.get('input[id="customer.phoneNumber"]').should('be.visible').type(users.phoneNumber);
    cy.get('input[id="customer.ssn"]').should('be.visible').type(users.ssn);    
    cy.get('input[id="customer.username"]').should('be.visible').type(users.username);
    cy.get('input[id="customer.password"]').should('be.visible').type(users.password);
    cy.get('input[id="repeatedPassword"]').should('be.visible').type(users.Repeatedpassword);
    cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    cy.url().should('include', '/register.htm');
    cy.get('.title').should('contain', 'Welcome ' + users.username);
    cy.get('#rightPanel > p').should('contain', 'Your account was created successfully. You are now logged in.');

   })

})
