import BasePage from "./base.page.js";

export default class LandingPage extends BasePage {
    constructor() {
        super();
    }

    get loginLink() {
        return `//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']`;
    }

    async goToLoginPage() {
        await this.actions.click(this.loginLink);
    }
}