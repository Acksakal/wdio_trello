Feature: Create a Board

  # Background: User is logged in
  #   Given I open the Trello homepage
  #   And I click on the 'Log-in button'
  #   When I enter 'username email' in the 'Email input field'
  #   And I click the 'Login-submit button' with text 'Continue'
  #   And I enter 'password' in the 'Password input field'
  #   And I click the 'Login-submit button' with text 'Log in'
  #   Then I should see the 'Create button' on the header

  Scenario: User creates a new board
    When I click the 'Create new board button'
    And I enter a '<boardTitle>' to the 'Board title input field'
    And I click the 'Create' button
    Then I should see h1-header with text '<boardTitle>' on 'Board' page

    Examples:
      | boardTitle     |
      | Another Name   |

