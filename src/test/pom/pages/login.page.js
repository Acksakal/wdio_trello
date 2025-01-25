import BasePage from './base.page.js';

export default class LoginPage extends BasePage {
    constructor() {
        super();
    }
    get loginButton() {
        return `//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']`;
    }
    get usernameInputField() {
        return `//input[@data-testid='username']`;
    }
    get passwordInputField() {
        return `//input[@data-testid='password']`;
    }
    get loginSubmitButton() {
        return `//button[@id='login-submit']`;
    }
    get createMenuButton() {
        return `//button[@data-testid='header-create-menu-button']`;
    }

    async logIn(username, password) {
        await this.open('/');
        await this.click(this.loginButton);
        await this.setValue(this.usernameInputField, username);
        await this.click(this.loginSubmitButton);
        await this.waitForDisplayed(this.passwordInputField);
        await this.setValue(this.passwordInputField, password);
        await this.click(this.loginSubmitButton);
        await this.waitForDisplayed(this.createMenuButton);
    }
}
