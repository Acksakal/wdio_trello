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

    clickCreateBoardButton() {
        return this.actions.click(this.startBoardCreationButton);
    }

    typeInBoardTitle(titleName) {
        return this.actions.setValue(this.createBoardPopover.boardTitleInputField, titleName);
    }

    clickCreateBoardSubmitButton() {
        return this.actions.click(this.createBoardPopover.submitBoardCreationButton);
    }    
    
}

