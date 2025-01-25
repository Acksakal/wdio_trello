import { Given, When, Then } from '@wdio/cucumber-framework';
import pages from "../pom/pages/page-factory.js";
import { expect } from 'chai';

// rewrite the Given part. But first handle the login logic
Given('the "Create" button is visible', async () => {
    await $(`//button[@data-testid='header-create-menu-button']`).waitForDisplayed();    
});

When('the user clicks the "Create a board" button', async () => {    
    await pages('dashboard').clickHomeButton();
    await pages('dashboard').clickCreateBoardButton();
});

When('the user enters a valid board title', async () => {    
    await pages('dashboard').typeInBoardTitle('Valid data');
});

When('the user clicks the "Create" button', async () => {    
    await pages('dashboard').clickCreateBoardSubmitButton();
});

Then('the board is successfully created', async () => {    
    const isBoardTitleDisplayed = await pages('board').isBoardTitleDisplayed();
    expect(isBoardTitleDisplayed).to.be.true;
});



