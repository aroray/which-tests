
module.exports = class HeaderNavigation{

topLink(linkName) {
     return browser.$(`//span[contains(@data-which-id, 'gn-top-level-menu-link-title') and text() = '${linkName}']`);
}
}