import CreateBoardPopover from "../create.board.modal.component.js";
import AccountMenuPopover from "../account.menu.component.js";
import PageActions from "../../page.actions.js";

class Header {
    constructor() {
        this.createBoardPopover = new CreateBoardPopover();
        this.accountMenu = new AccountMenuPopover();
        this.actions = new PageActions();
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

    get accountButton() {
        return `//button[@data-testid='header-member-menu-button']`;
    }

    async waitForAccountButtonDisplayed() {
        await this.actions.waitForElementDisplayed(this.accountButton);
    }

    async clickAccountButton() {
        await this.actions.click(this.accountButton);
    }

    async clickProfileAndVisibilityLink() {
        await this.actions.click(this.accountMenu.profileLink);
    }
}

export default new Header();