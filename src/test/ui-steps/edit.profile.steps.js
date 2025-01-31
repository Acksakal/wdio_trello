import { Given, When, Then } from '@wdio/cucumber-framework';
import pages from "../pom/pages/page-factory.js";
import Header from '../pom/components/common/header.component.js';
import { expect } from 'chai';
const header = new Header();

Given(/^I see the 'Account button' on 'Header'$/, async () => {
    await header.waitAccountButtonDisplayed();
});

When(/^I click the 'Account button'$/, async () => {    
    await header.clickAccountButton();
});

When(/^I click the 'Profile and visibility button'$/, async () => {  
    await header.clickProfileAndVisibilityLink();
});

When(/^I enter '([^"]*)' to the 'Bio textarea'$/, async (bioText) => { 
    await pages('profile').setValueToBioTextArea(bioText);
});

When(/^I click the 'Save button'$/, async () => {  
    await pages('profile').clickSaveButton();
});

Then(/^I should see a 'Saved toast notification' message$/, async () => {    
    const isSavedNotificationDisplayed = await pages('profile').isSavedNotificationDisplayed();
    expect(isSavedNotificationDisplayed).to.be.true;
});
