Feature: Edit User Profile

Scenario: Update profile bio
  Given the profile icon is visible
  When the user enters their profile
  And successfully edits their profile bio
  Then a toast notification message "Saved" is displayed

