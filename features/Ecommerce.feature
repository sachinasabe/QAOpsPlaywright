Feature: Ecommerce Validation
  @Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "asabesachin2@gmail.com" and "Sachin@1988"
    When add "ZARA COAT 3" to Cart
    Then verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify Order is present in the OrderHistory

    @Validation
    Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    |username              |password     |
    |asabesachin@gmail.com |Sachin@1989  |
    |asabesachin3@gmail.com|Sachin@1888  |