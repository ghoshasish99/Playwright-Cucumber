Feature: Search-Add

  
Scenario Outline: Search Product
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    And User searches for the "<Product>"
    And User adds "<Product>" product to the cart
    Then User should be able to view and add the listed product "<Product>"

    Examples:
      | EmailID         | Password    | Product                       |
      | Ashish@shop.com | Password$1  | Apple iPhone 6s Plus          |