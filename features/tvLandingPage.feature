Feature: TV Landing Page related tests

  Background:
    Given I reset the webcontainer
    And I goto "TVLANDING" page

 @runme
  Scenario: As a Guest I can sort TV Landing page results Price low to high
    Then I can sort page results by "Price (low to high)"

 @runme
  Scenario: As a Guest I have access to Navigation bar links in TV Landing page
    Then I should be presented with navigation bar links "Technology ,Home & garden ,Money ,Baby & child ,Cars & travel ,Campaigns ,More from Which? "

 @runme
  Scenario: As a Guest I have 48 results displayed by default in TV Landing page
    Then I should see "48" products in results

#Below Scenarios do not have step definitions written for technical test
  Scenario: As a Guest I cannot filter TV Landing page results by Which? recommendations
    Then I cannot filter television reviews by Which recommendation

  Scenario: As a Guest I can sort TV Landing page results Price low to high
    When I sort page results by "Price (low to high)"
    Then I see results ordered by  price low to high

  Scenario: As a Guest I can navigate to product details page of product displayed in TV Landing page
    When I click on any product
    Then I should be redirected to the "Television details" page