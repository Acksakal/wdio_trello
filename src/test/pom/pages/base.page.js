import Header from '../components/common/header.component.js'
import PageActions from '../page.actions.js';

export default class BasePage {
    constructor() {
        this.header = new Header();
        this.actions = new PageActions();
    }     
}
