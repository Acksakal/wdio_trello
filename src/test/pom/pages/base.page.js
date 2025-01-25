import Header from '../components/common/header.component.js'

function isSelectorTypeString(selector) {
    return typeof selector === 'string';
}

export default class BasePage {
    constructor() {
        this.header = new Header();
    } 

    async findElement(selector) {
        if (isSelectorTypeString(selector)) {
            return $(selector);
        } else {
            throw new TypeError(`ERROR: Selector '${selector}' is of type '${typeof selector}' and must be a string`)
        }
    }

    async isElementDisplayed(selector) {
        const element = await this.findElement(selector);
        return element.isDisplayed();
    }

    async waitForDisplayed(selector) {
        const element = await this.findElement(selector);
        await element.waitForDisplayed();
        return element;
    }

    async waitUntilNotVisible(selector) {
        const element = await this.findElement(selector);
        await element.waitForDisplayed({ reverse: true });
    }

    async click(selector) {
        const element = await this.waitForDisplayed(selector);
        await element.waitForEnabled();
        await element.click();
    }
    
    async setValue(selector, value) {
        const input = await this.waitForDisplayed(selector);
        await input.setValue(value);
    }
    
    async open(path) {        
        await browser.url(path);
    }
}
