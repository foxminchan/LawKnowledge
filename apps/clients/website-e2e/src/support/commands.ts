// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    getBySel(value: string): Chainable<Subject>;
    visualSnapshot(value: string): Chainable<Subject>;
  }
}

Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[name=${selector}]`, ...args);
});
Cypress.Commands.add('visualSnapshot', (snapshotName) => {
  cy.screenshot(snapshotName);
});