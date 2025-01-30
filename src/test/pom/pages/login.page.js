import LandingPage from './landing.page.js';

export default class LoginPage extends LandingPage {
    constructor() {
        super();
    }
    get usernameEmailInputField() {
        return `//input[@data-testid='username']`;
    }
    get passwordInputField() {
        return `//input[@data-testid='password']`;
    }
    get loginSubmitButton() {
        return `//button[@id='login-submit']`;
    }
    
    async logIn(username, password) {
        await this.setValue(this.usernameEmailInputField, username);
        await this.click(this.loginSubmitButton);
        await this.setValue(this.passwordInputField, password);
        await this.click(this.loginSubmitButton);
    }

    async typeInUsernameEmail(usernameEmail) {
        await this.setValue(this.usernameEmailInputField, usernameEmail);
    }

    async typeInPassword(password) {
        await this.setValue(this.passwordInputField, password);
    }

    async clickLoginButton() {
        await this.click(this.loginSubmitButton);
    }
}
