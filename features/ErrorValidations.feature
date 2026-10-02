Feature: Ecommerce Validation
@Validation
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    |username              |password     |
    |asabesachin@gmail.com |Sachin@1989  |
    |asabesachin3@gmail.com|Sachin@1888  |