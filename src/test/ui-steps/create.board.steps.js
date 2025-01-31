import { When, Then } from '@wdio/cucumber-framework';
import pages from '../pom/pages/page-factory.js';
import { expect } from 'chai';

When(/^I click the 'Create new board button'$/, async () => {      
    await pages('home').clickCreateBoardButton();
});

When(/^I enter a '([^"]*)' to the 'Board title input field'$/, async (boardTitle) => {    
    await pages('home').typeInBoardTitle(boardTitle);
});

When(/^I click the 'Create' button$/, async () => {    
    await pages('home').clickCreateBoardSubmitButton();
});

Then(/^I should see h1-header with text '([^"]*)' on 'Board' page$/, async (boardTitle) => {    
    const isBoardTitleDisplayed = await pages('board').isBoardTitleDisplayed(boardTitle);
    expect(isBoardTitleDisplayed).to.be.true;
});





