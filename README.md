# E2E testing (Cypress)
[Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) is a purely JavaScript-based front-end testing tool built for the modern web.
This is modified and more lightweight version of original [ngx-admin](https://github.com/akveo/ngx-admin) to practice UI Automation with Cypress.
- [E2E testing (Cypress)](#e2e-testing-cypress)
  - [Installing and opening Cypress](#installing-and-opening-cypress)
  - [APIs](#apis)
    - [Libraries and Tools](#libraries-and-tools)
## Installing and opening Cypress
```sh
npm install cypress --save-dev
npx cypress open
```
## APIs
you can find here [table of contents](https://docs.cypress.io/api/table-of-contents):
- Events
- [Assertions](https://docs.cypress.io/guides/references/assertions)
  - [Chai](https://github.com/chaijs/chai)
  - BDD-Assertions
  - TDD-Assertions
  - [Chai-jQuery](https://github.com/chaijs/chai-jquery)
  - [sinon-chai](https://github.com/domenic/sinon-chai)
    - [cy.stub()](https://docs.cypress.io/api/commands/stub)
    - [cy.spy()](https://docs.cypress.io/api/commands/spy)
    - [Stubs, Spies, and Clocks](https://docs.cypress.io/guides/guides/stubs-spies-and-clocks)
- Commands
- Utilities
- Cypress API
- Plugins

### Libraries and Tools
Cypress automatically bundles and wraps these libraries:
| Name                                                | What it does                               |
| :-------------------------------------------------- | :----------------------------------------- |
| [sinon](http://sinonjs.org/)                        | provides the cy.stub() and cy.spy() APIs   |
| [lolex ](https://github.com/sinonjs/lolex)          | provides the cy.clock() and cy.tick() APIs |
| [sinon-chai](https://github.com/domenic/sinon-chai) | adds chai assertions for stubs and spies   |
