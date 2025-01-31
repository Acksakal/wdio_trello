import BasePage from './base.page.js';

export default class BoardPage extends BasePage {
    constructor() {
        super();
    }

    boardTitleHeader(title) {        
        return `//h1[@data-testid='board-name-display' and normalize-space(text())='${title}']`;
    }

    isBoardTitleDisplayed(title) {   
        return this.actions.isElementDisplayed(this.boardTitleHeader(title));
    }

}
