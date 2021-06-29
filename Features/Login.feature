Feature: Invalid Login

  Scenario Outline:User logs in with invalid email or username
    Given User launches page
    And User navigates to login
    When User logged in using the invalid emailid "<EmailID>"
    Then Error Message should be displayed

    Examples:
        | EmailID         | 
        | asd@exp.com     |
        |                 |