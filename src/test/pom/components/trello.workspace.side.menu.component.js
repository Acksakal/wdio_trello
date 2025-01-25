

export default class TrelloWorkspaceSideMenu {
    get boardsTabLink() {
        return `//a[@data-testid='home-team-boards-tab']`
    }

    get highlightsTabLink() {
        return `//a[@data-testid='home-team-highlights-tab']`
    }

    get viewsTabLink() {
        return `//a[@data-testid='home-team-views-tab']`
    }

    get membersTabLink() {
        return `//a[@data-testid='home-team-members-tab']`
    }

    get settingsTabLink() {
        return `//a[@data-testid='home-team-settings-tab']`
    }
}