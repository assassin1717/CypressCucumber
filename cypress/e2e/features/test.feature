Feature: Google Chrome test
#Scenario Outline is only used if you have Examples table if not use just Scenario
  Scenario Outline: Search in browser
    Given I am in Google home page
    Then I accept the cookies
    When I type in "<searchText>"
    And I click search button
    Then I should be redirected to the search page

    Examples:
      | searchText |
      | abola    |
      | facebook |
