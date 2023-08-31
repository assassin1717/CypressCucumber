Feature: Google Chrome test

  Scenario Outline: Search in browser
    Given I am in Google home page
    Then I accept the cookies
    When I type in "<searchText>"
    When I click search button
    Then I should be redirected to the search page

    Examples:
      | searchText |
      | abola    |
      | facebook |
