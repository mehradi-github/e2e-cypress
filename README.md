# E2E testing (Cypress)
[Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) is a purely JavaScript-based front-end testing tool built for the modern web.
This is modified and more lightweight version of original [ngx-admin](https://github.com/akveo/ngx-admin) to practice UI Automation with Cypress.
- [E2E testing (Cypress)](#e2e-testing-cypress)
  - [Installing and opening Cypress](#installing-and-opening-cypress)
## Installing and opening Cypress
```sh
npm install cypress --save-dev
npx cypress open
```
file: package.json
```json
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```
```sh
npm run cypress:open
```