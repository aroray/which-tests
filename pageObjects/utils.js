const assert = require('assert');

module.exports = {

   redirectToPage: function(pageName) {
        const targetPageUrl = `${browser.config.baseUrl}${browser.config.environmentSetup.pagesPaths[pageName]}`;
        browser.url(targetPageUrl);
       },

   isElementVisibleAndEnabled: function(element, elementDescription) {
        assert.ok(element.isDisplayed(), `The '${elementDescription}' should be visible`);
        assert.ok(element.isEnabled(), `The '${elementDescription}' should be enabled`);
       }
}