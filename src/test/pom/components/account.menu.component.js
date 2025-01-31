

export default class AccountMenuPopover {
    get profileLink() {
        return `//a[@data-testid='account-menu-profile']`
    }

    get activityLink() {
        return `//a[@data-testid='account-menu-activity']`
    }

    get cardsLink() {
        return `//a[@data-testid='account-menu-cards']`
    }

    get settingsLink() {
        return `//a[@data-testid='account-menu-settings']`
    }
}