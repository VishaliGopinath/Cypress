Feature: PierceAB

    Background: Open the Application
    Given A user opens the 24MX web page

    Scenario: Search Product    
    When A user enter the search product "Helmet"
    And A user searches for the product
    Then A user will get the search result for the product

    Scenario: View 24MX Outlet
    When A user clicks on the Menu
    And A user clicks on the Outlet
    Then A user will be able to see discounted products at outlet

    Scenario: View Bags
    When A user clicks on the Menu
    And A user clicks on the Motorcross Gear 
    And A user clicks on the Bags section
    Then A user will be able to see all the available bags

    Scenario: View Brands
    When A user clicks on the Menu
    And A user clicks on the Brands
    Then A user will be able to see all the available brands 

    Scenario: View Order Status
    When A user clicks on the Menu
    And A user clicks on the Order Status
    Then A user will be able to see the window requesting order information 
