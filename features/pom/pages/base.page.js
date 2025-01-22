import PageAction from '../actions/page.actions.js'; 

export default class BasePage {
    constructor() {
        this.actions = new PageAction();
    }

    async open(path) {
        await browser.url(path);
    }
}
