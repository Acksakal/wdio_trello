import CreateBoardPopover from "../create.board.modal.component.js";

export default class Header {
    constructor() {
        this.createBoardPopover = new CreateBoardPopover();
    }
    get trelloHomeLink() {
        return `//a[@aria-label='Back to home']`;
    }

    get workspacesButton() {
        return `//button[@data-testid='workspace-switcher']`
    }

    get createMenuButton() {
        return `//button[@data-testid='header-create-menu-button']`;
    }
    
    get searchInputField() {
        return `//input[@data-test-id='search-dialog-input']`;
    }

    get avatarButton() {
        return `//button[@data-testid='header-member-menu-button']`;
    }
}
