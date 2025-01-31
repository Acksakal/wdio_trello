
function isSelectorTypeString(selector) {
    return typeof selector === 'string';
}
/**
 * Custom DOM-interacting methods with embedded waits to ensure
 * elements are ready before interaction, reducing redundancy in tests.
 */
export default class PageActions {
    async findElement(selector) {
        if (isSelectorTypeString(selector)) {
            const element = await $(selector);
            return element;
        } else {
            throw new TypeError(`ERROR: Selector '${selector}' is of type '${typeof selector}' and must be a string`)
        }
    }

    async isElementDisplayed(selector) {
        const element = await this.findElement(selector);        
        await element.waitForDisplayed();
        return await element.isDisplayed();
    }

    async waitForElementDisplayed(selector) {
        const element = await this.findElement(selector);
        await element.waitForDisplayed();
        return element;
    }

    async waitUntilNotVisible(selector) {
        const element = await this.findElement(selector);
        await element.waitForDisplayed({ reverse: true });
    }

    async click(selector) {
        const element = await this.waitForElementDisplayed(selector);
        await element.waitForEnabled();
        await element.click();
    }
    
    async setValue(selector, value) {
        const input = await this.waitForElementDisplayed(selector);
        await input.setValue(value);
    }
    
    async open(path) {        
        await browser.url(path);
    }
}
