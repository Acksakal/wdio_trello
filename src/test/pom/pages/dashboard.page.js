import BasePage from './base.page.js';
import TrelloWorkspaceSideMenu from '../components/trello.workspace.side.menu.component.js';

export default class DashboardPage extends BasePage {
    constructor() {
        super();
        this.trelloWorkspaceSideMenu = new TrelloWorkspaceSideMenu();
    }

    get homeLink() {
        return `//a[span[text()='Home']]`;
    }

    get startBoardCreationButton() {
        return `//button[.//span[text()="Create a board"]]`;
    }
    
    get boardTitleInputField() {
        return `//input[@data-testid='create-board-title-input']`;
    }

    get submitBoardCreationButton() {
        return `//button[@data-testid='create-board-submit-button']`;
    }

    async clickHomeButton() {
        await this.click(this.homeLink);
    }

    async clickCreateBoardButton() {
        await this.click(this.startBoardCreationButton);
    }

    async typeInBoardTitle(titleName) {
        await this.setValue(this.boardTitleInputField, titleName);
    }

    async clickCreateBoardSubmitButton() {
        await this.click(this.submitBoardCreationButton);
    }    
}
