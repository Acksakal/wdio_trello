

export default class BoardPopover {    
    get boardTitleInputField() {
        return `//input[@data-testid='create-board-title-input']`;
    }

    get submitBoardCreationButton() {
        return `//button[@data-testid='create-board-submit-button']`;
    }
}   
