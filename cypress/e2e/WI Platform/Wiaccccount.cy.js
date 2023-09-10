import {faker} from '@faker-js/faker';

describe("Wiaccount", () => {
    it("Sign up in Wiaccount", () => {

      const email = faker.internet.email();

      cy.visit("http://159.89.205.48/") // Wiaccount
      cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').attachFile(filepath)
      cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').type('Hello, World')
      cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').type('Hello, World')
      cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').type('Hello, World')
      cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').type(email)
    })
  })
  