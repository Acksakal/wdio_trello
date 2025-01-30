Feature: Edit User Profile
  
  # Background: User is logged in
  #   Given I open the Trello homepage
  #   And I click on the "Log-in button"
  #   When I enter "username email" in the "Email input field"
  #   And I click the "Login-submit button" with text "Continue"
  #   And I enter "password" in the "Password input field"
  #   And I click the "Login-submit button" with text "Log in"
  #   Then I should see the "Create button" on the header

  Scenario: User updates profile bio
    Given the profile icon is visible
    When the user enters their profile
    And successfully edits their profile bio
    Then a toast notification message "Saved" is displayed

