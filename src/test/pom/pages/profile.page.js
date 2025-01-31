import BasePage from './base.page.js';

export default class ProfilePage extends BasePage {
    constructor() {
        super();
    }

    get bioTextArea() {
        return `//textarea[@id='bio']`;
    }

    get saveButton() {
        return `//button[@type='submit']`;
    }

    get savedToastNotification() {
        return `//div[contains(@class, 'a4ZvSL0pjeULBU') and @role='alert']`;
    }

    async setValueToBioTextArea(bioText) {        
        await this.actions.setValue(this.bioTextArea, bioText);
    }

    async clickSaveButton() {   
        await this.actions.click(this.saveButton);
    }

    isSavedNotificationDisplayed() {
        return this.actions.isElementDisplayed(this.savedToastNotification);
    }

}
