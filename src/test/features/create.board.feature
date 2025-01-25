Feature: Create a Board

Scenario: User creates a new board
  Given the "Create" button is visible
  When the user clicks the "Create a board" button
  And the user enters a valid board title
  And the user clicks the "Create" button
  Then the board is successfully created
