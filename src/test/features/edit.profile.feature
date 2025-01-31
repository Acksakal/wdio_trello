Feature: Edit User Profile

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
