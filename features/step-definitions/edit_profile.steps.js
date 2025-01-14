import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'

Given('the profile icon is visible', async () => {
    await $(`//button[@data-testid='header-member-menu-button']`).waitForDisplayed();
});

When('the user enters their profile', async () => {    
    await $(`//button[@data-testid='header-member-menu-button']`).click();
    await $(`//a[@data-testid='account-menu-profile']`).waitForDisplayed();
    await $(`//a[@data-testid='account-menu-profile']`).click();
    await $(`//textarea[@id='bio']`).waitForDisplayed();   
});

When('successfully edits their profile bio', async () => {    
    await $(`//textarea[@id='bio']`).setValue('Valid input');  
    await $(`//button[@type='submit']`).click();
});

Then('a toast notification message "Saved" is displayed', async () => {    
    await $(`//div[contains(@class, 'a4ZvSL0pjeULBU') and @role='alert']`).waitForDisplayed();
});
