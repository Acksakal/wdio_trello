import BasePage from './base.page.js';

export default class BoardPage extends BasePage {
    constructor() {
        super();
    }

    get boardTitleHeader() {
        return `//h1[@data-testid='board-name-display']`;
    }

    async isBoardTitleDisplayed() {
        await this.waitForDisplayed(this.boardTitleHeader);
        return await this.isElementDisplayed(this.boardTitleHeader);
    }

}
