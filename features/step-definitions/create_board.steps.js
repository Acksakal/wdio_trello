import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'

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
    await $(`//button[@data-testid='create-board-submit-button']`).waitForEnabled({ timeout: 500 });
});

When('the user clicks the "Create" button', async () => {    
    await $(`//button[@data-testid='create-board-submit-button']`).click();
});

Then('the board is successfully created', async () => {    
    await $(`//span[@data-testid='view-switcher-button-text']`).waitForDisplayed();
});
