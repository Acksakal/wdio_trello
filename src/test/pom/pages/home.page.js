import BasePage from './base.page.js';
import TrelloWorkspaceSideMenu from '../components/trello.workspace.side.menu.component.js';
import CreateBoardPopover from '../components/create.board.modal.component.js';

export default class HomePage extends BasePage {
    constructor() {
        super();
        this.trelloWorkspaceSideMenu = new TrelloWorkspaceSideMenu();
        this.createBoardPopover = new CreateBoardPopover();
    }

    get startBoardCreationButton() {
        return `//li[@data-testid='create-board-tile']`;
    }
    
    async waitForHeaderCreateButtonVisible() {
        await this.waitForElementDisplayed(this.header.createMenuButton);
    }  

    async clickCreateBoardButton() {
        await this.click(this.startBoardCreationButton);
    }

    async typeInBoardTitle(titleName) {
        await this.setValue(this.createBoardPopover.boardTitleInputField, titleName);
    }

    async clickCreateBoardSubmitButton() {
        await this.click(this.createBoardPopover.submitBoardCreationButton);
    }    
    
}

