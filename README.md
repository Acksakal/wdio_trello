# Automated Testing for Trello Website

This project showcases a Test Automation Framework (TAF) using the Page Object Model (POM) for [Trello](https://trello.com/home), automating UI and API tests with modern tools and best practices.

## Features

- **E2E Testing** using [WebdriverIO](https://webdriver.io/)
- **Behavior-Driven Development (BDD)** with [Cucumber](https://cucumber.io/) for readable, collaborative tests.
- **API Testing** with [SuperTest](https://github.com/visionmedia/supertest) and [Mocha](https://mochajs.org/) to validate backend.
- **Assertion** using [Chai](https://www.chaijs.com/) lightweight library.

### Install Dependencies
```bash
npm install
```
After installing dependencies, set up your .env file with the required environment variables.

### Run Tests

To run the UI tests:

```bash
npm run test:ui
```
To run API tests:
```bash
npm run test:api
```