

export default class Header {
    get trelloHomeLink() {
        return `//a[@aria-label='Back to home']`;
    }

    get workspacesButton() {
        return `//button[@data-testid='workspace-switcher']`
    }

    get avatarButton() {
        return `//button[@data-testid='header-create-menu-button']`;
    }

    get searchInputField() {
        return `//input[@data-test-id='search-dialog-input']`;
    }

    get createMenuButton() {
        return `//button[@data-testid='header-create-menu-button']`;
    }    
}
