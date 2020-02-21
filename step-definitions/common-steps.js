const HeaderNavigation = require("../pageObjects/HeaderNavigation.js"),
      TVLandingPage = require("../pageObjects/TVLandingPage.js"),
      assert = require('assert');


const   {Given, Then, When} = require('cucumber'),
        {redirectToPage, isElementVisibleAndEnabled} =  require("../pageObjects/utils.js"),
        headerNavigation = new HeaderNavigation(),
        tvLandingPage = new TVLandingPage;

Given(/^I reset the webcontainer$/, () => {
     const currentSessionId = browser.sessionId;
     console.log(`current sessionId = ${browser.sessionId}`);
     browser.reloadSession();
     console.log(`new sessionId = ${browser.sessionId}`);
     browser.waitUntil(() => browser.sessionId && browser.sessionId !== currentSessionId,
                       30000, `Browser sessionId did not update within 30000 seconds`);
});

When(/^I goto "(.*)" page$/, function(pageName) {
    redirectToPage(pageName);
});

Then(/^I should be presented with navigation bar links "(.+)"$/, function(headerLinks) {
     areListedElementsVisible(headerLinks, "option in the header panel should be visible");
});

When(/^I should see "(.*)" products in results$/, function(productNumbers) {
    const productLength = tvLandingPage.productCardArrayElement.length;
    console.log("Product Card Size is :" + productLength);
    assert.ok(productLength == productNumbers , `Number of Products were expected to be ${productNumbers} but ${productLength} are shown`);
});

Then(/^I can sort page results by "(.*)"$/, function(sortByOption) {
    tvLandingPage.sortOption(sortByOption);
});

  function areListedElementsVisible(elementList, elementDescription) {
     elementList.split(",").forEach(function(element) {
      var trimmedElement = element;
      console.log("Element checked is: " + trimmedElement);
      browser.pause(1000);
      isElementVisibleAndEnabled(headerNavigation.topLink(trimmedElement), "The ${trimmedElement}" + elementDescription);
     });
  }