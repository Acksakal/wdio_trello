Feature: Edit User Profile
  
  # Background: User is logged in
  #   Given I open the Trello homepage
  #   And I click on the 'Log-in button'
  #   When I enter 'username email' in the 'Email input field'
  #   And I click the 'Login-submit button' with text 'Continue'
  #   And I enter 'password' in the 'Password input field'
  #   And I click the 'Login-submit button' with text 'Log in'
  #   Then I should see the 'Create button' on the header

  Scenario: User updates profile bio
    Given I see the 'Account button' on 'Header'
    When I click the 'Account button'
    And I click the 'Profile and visibility button'
    And I enter '<bioText>' to the 'Bio textarea'
    And I click the 'Save button'
    Then I should see a 'Saved toast notification' message

    Examples:
      | bioText         |
      | Profiled edited |
