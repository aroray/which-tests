module.exports = class TVLandingPage {

get productCardArrayElement() {
    return browser.$$("//div[contains(@data-which-id, 'product-card')]");
}

sortOption(sortOptionName) {
    browser.$("//select[contains(@id, 'product_listing_sorter') and contains(@title, 'Sort by')]").click();
    browser.$("#product_listing_sorter").$(`option=${sortOptionName}`).click();
}
}