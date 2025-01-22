export default class PageAction {

    async click(selector) {
        await $(selector).click();
    }

    async setValue(selector, value) {
        await $(selector).setValue(value);
    }

    async waitForDisplayed(selector) {
        await $(selector).waitForDisplayed();
    }
}
