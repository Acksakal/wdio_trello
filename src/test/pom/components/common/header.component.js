import CreateBoardPopover from "../create.board.modal.component.js";
import AccountMenuPopover from "../account.menu.component.js";
import PageActions from "../../page.actions.js";

class Header {
    constructor() {
        this.createBoardPopover = new CreateBoardPopover();
        this.accountMenu = new AccountMenuPopover();
        this.actions = new PageActions();
    }
    
    get searchInputField() {
        return `//input[@data-test-id='search-dialog-input']`;
    }

    get accountButton() {
        return `//button[@data-testid='header-member-menu-button']`;
    }

    waitForAccountButtonDisplayed() {
        return this.actions.waitForElementDisplayed(this.accountButton);
    }

    clickAccountButton() {
        return this.actions.click(this.accountButton);
    }

    clickProfileAndVisibilityLink() {
        return this.actions.click(this.accountMenu.profileLink);
    }
}

export default new Header();