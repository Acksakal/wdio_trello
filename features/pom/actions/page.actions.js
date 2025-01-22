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

    async waitForNotDisplayed(selector, timeout = 5000) {
        await browser.waitUntil(
            async () => !(await $(selector).isDisplayed()),
            {
                timeout,
                timeoutMsg: `The element '${selector}' is still visible after ${timeout}ms`,
            }
        );
    }
}
