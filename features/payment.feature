Feature: Payment

  Scenario Outline: Order a product
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    And User searches for the "<Product>"
    And User adds "<Product>" product to the cart
    And User enters Address details with "<Title>","<FirstName>", "<LastName>", "<Line1>","<Line2>","<City>","<State>", "<Zipcode>"
    And User enters Payment details with "<CardNumber>", "<CardName>", "<Year>","<Month>","<SecurityCode>"
    Then User should get the Confirmation of Order

    Examples:
      | EmailID         |   Password  | Product              | Title | FirstName | LastName | Line1        | Line2         | City      | State       | Zipcode | CardNumber       | CardName | Year | Month | SecurityCode |
      | Ashish@shop.com | Ashishpwd$1 | Apple iPhone 6s Plus | Mr    | Ashish    | Ghosh    | Amstelveen   | Uilenstede    | Amsterdam | Amsterdam   | 1181    | 1234567890       | Ashish   | 2031 | 11    | 151          |
