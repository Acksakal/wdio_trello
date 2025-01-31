function isSelectorTypeNotString(selector) {
    return typeof selector !== 'string';
}
/**
 * Custom DOM-interacting methods with embedded waits to ensure
 * elements are ready before interaction, reducing redundancy in tests. 
 */
export default class PageActions {
    async findElement(selector, reverse = false) {
        if (isSelectorTypeNotString(selector)) {
            throw new TypeError(`ERROR: Selector '${selector}' is of type '${typeof selector}' and must be a string`)
        }
        
        await $(selector).waitForDisplayed({ reverse });        
        return $(selector);
    }

    async isElementDisplayed(selector) {
        const element = await this.findElement(selector);        
        return element.isDisplayed();
    }

    waitForElementDisplayed(selector) {
        return this.findElement(selector);
    }

    waitUntilNotVisible(selector) {
        return this.findElement(selector, true);
    }

    async click(selector) {
        const element = await this.findElement(selector);
        await element.waitForEnabled();
        return element.click();
    }
    
    async setValue(selector, value) {
        const input = await this.findElement(selector);
        return input.setValue(value);
    }
    
    async open(path) {        
        await browser.url(path);       
    }
}
