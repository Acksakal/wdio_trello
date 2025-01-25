Feature: Create Board menu

  Scenario: User interacts with a create board menu popover
    Given the "Create" button is visible
    When the user clicks the create button
    And the user clicks the "Create board" button
    And the user enters a valid board title
    And the user closes the menu popover
    Then the the menu popover is no longer visible