import { Given, When, Then } from '@wdio/cucumber-framework';

Given('the "Create" button is visible', async () => {
    await $(`//button[@data-testid='header-create-menu-button']`).waitForDisplayed();
});

When('the user clicks the create button', async () => {    
    await $(`//button[@data-testid='header-create-menu-button']`).click();
    await $(`//button[@data-testid='header-create-board-button']`).waitForDisplayed();
});

When('the user clicks the "Create board" button', async () => {    
    await $(`//button[@data-testid='header-create-board-button']`).click();
    await $(`//input[@data-testid='create-board-title-input']`).waitForDisplayed();
});

When('the user enters a valid board title', async () => {    
    await $(`//input[@data-testid='create-board-title-input']`).setValue('Valid input');
});

When('the user closes the menu popover', async () => {    
    await $(`//button[@data-testid='popover-close']`).click();
});

Then('the the menu popover is no longer visible', async () => {
    await $(`//section[@data-testid='header-create-menu-popover']`).waitForDisplayed({ reverse:true });
});

