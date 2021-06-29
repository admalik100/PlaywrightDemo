Feature:Job search

    Scenario: User Searches for different jobs
      Given User launches website
      And Clicks login
      And User enters username "<EmailID>"
      And User enters password "<Pass>"
      When User searches for Jobs "<Job Titles>"
      Then Job listing is opened

      Examples:
        |Job Titles   |EmailID          |Pass    |
        |QA Automation|ad05464@gmail.com|8Nov1994|