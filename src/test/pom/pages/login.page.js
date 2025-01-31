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
    
    async logIn(usernameEmail, password) {
        await this.actions.setValue(this.usernameEmailInputField, usernameEmail);
        await this.actions.click(this.loginSubmitButton);
        await this.actions.setValue(this.passwordInputField, password);
        await this.actions.click(this.loginSubmitButton);
    }

    async typeInUsernameEmail(usernameEmail) {
        await this.actions.setValue(this.usernameEmailInputField, usernameEmail);
    }

    async typeInPassword(password) {
        await this.actions.setValue(this.passwordInputField, password);
    }

    async clickLoginButton() {
        await this.actions.click(this.loginSubmitButton);
    }
}
