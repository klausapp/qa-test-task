describe('Test Search', () => {
    beforeEach(() => {
        let url = Cypress.config().baseUrl
        let email = Cypress.config().email
        let password = Cypress.config().password

        cy.visit(url)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type(password)
        cy.get('button[type="submit"]').click()
        cy.get('button[data-testid="navbar-coaching"]').click()
        cy.get('a[href="/coaching/sessions"]').click()
    });

    it("allows users to search certain session", () => {
        cy.get('input[placeholder="Search"]').type('Purr')
        cy.get("a[data-testid='session-row']").should("have.length", 1);
        cy.contains("Purr");
        cy.get('input[placeholder="Search"]')
            .clear()
            .type("testsearch");
        cy.get("a[data-testid='session-row']").should("not.have.length", 1);
    });
})