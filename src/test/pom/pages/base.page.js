import headerContainer from '../components/common/header.component.js'
import PageActions from '../page.actions.js';

export default class BasePage {
    constructor() {
        this.header = headerContainer;
        this.actions = new PageActions();
    }     
}
