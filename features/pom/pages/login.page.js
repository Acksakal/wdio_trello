import BasePage from './base.page.js';

export default class LoginPage extends BasePage {
    constructor() {
        super();
    }
    get loginButton() {
        return `//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']`;
    }
    get usernameInput() {
        return `//input[@data-testid='username']`;
    }
    get passwordInput() {
        return `//input[@data-testid='password']`;
    }
    get loginSubmitButton() {
        return `//button[@id='login-submit']`;
    }
    get createMenuButton() {
        return `//button[@data-testid='header-create-menu-button']`;
    }

    async login(username, password) {
        await this.actions.click(this.loginButton);
        await this.actions.setValue(this.usernameInput, username);
        await this.actions.click(this.loginSubmitButton);
        await this.actions.waitForDisplayed(this.passwordInput);
        await this.actions.setValue(this.passwordInput, password);
        await this.actions.click(this.loginSubmitButton);
        await this.actions.waitForDisplayed(this.createMenuButton);
    }
}
