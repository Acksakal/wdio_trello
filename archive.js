/**
 * read about lazy loading and create instances only when called
 */

// import { Given, When, Then } from '@wdio/cucumber-framework';
// import pages from "../pom/pages/page-factory.js";
// import { expect } from 'chai';

// Given(/I open the Trello homepage/, async () => {
//     await pages('landing').open('/');
// });

// Given(/I click on the "Log-in button"/, async () => {
//     await pages('landing').goToLoginPage();
// });

// When(/I enter "username email" in the "Email input field"/, async () => {
//     await pages('login').typeInUsernameEmail(process.env.LOGIN);
// });

// When(/I click the "Login-submit button" with text "Continue"/, async () => {
//     await pages('login').clickLoginButton();
// });

// When(/I enter "password" in the "Password input field"/, async () => {
//     await pages('login').typeInPassword(process.env.PASSWORD);
// });

// When(/I click the "Login-submit button" with text "Log in"/, async () => {
//     await pages('login').clickLoginButton();
// });

// Then(/I should see the "Create button" on the header/, async () => {
//     const isHeaderCreateButtonVisible = await pages('home').isHeaderCreateButtonVisible();
//     expect(isHeaderCreateButtonVisible).to.be.true;
// });




// import { Given, When, Then } from '@wdio/cucumber-framework';
// import pages from "../pom/pages/page-factory.js";
// import { expect } from 'chai';

// Given(/I open the Trello homepage/, async () => {
//     await pages('landing').open('/');
// });

// Given(/I click on the "Log-in button"/, async () => {
//     await pages('landing').goToLoginPage();
// });

// When(/I enter "username email" in the "Email input field"/, async () => {
//     await pages('login').typeInUsernameEmail(process.env.LOGIN);
// });

// When(/I click the "Login-submit button" with text "Continue"/, async () => {
//     await pages('login').clickLoginButton();
// });

// When(/I enter "password" in the "Password input field"/, async () => {
//     await pages('login').typeInPassword(process.env.PASSWORD);
// });

// When(/I click the "Login-submit button" with text "Log in"/, async () => {
//     await pages('login').clickLoginButton();
// });

// Then(/I should see the "Create button" on the header/, async () => {
//     await pages('home').waitForHeaderCreateButtonVisible();
// });



// typeInUsernameEmail(usernameEmail) {
//     return this.actions.setValue(this.usernameEmailInputField, usernameEmail);
// }

// typeInPassword(password) {
//     return this.actions.setValue(this.passwordInputField, password);
// }

// clickLoginButton() {
//     return this.actions.click(this.loginSubmitButton);
// }

  
//   # Background: User is logged in
//   #   Given I open the Trello homepage
//   #   And I click on the 'Log-in button'
//   #   When I enter 'username email' in the 'Email input field'
//   #   And I click the 'Login-submit button' with text 'Continue'
//   #   And I enter 'password' in the 'Password input field'
//   #   And I click the 'Login-submit button' with text 'Log in'
//   #   Then I should see the 'Create button' on the header