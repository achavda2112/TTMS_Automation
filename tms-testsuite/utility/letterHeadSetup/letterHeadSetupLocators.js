module.exports = {
    button: {
        back: "//*[@ng-reflect-label='Back']",
        add: "//*[@ng-reflect-label='Add']",
        search: "//*[@ng-reflect-label='Search']",
        save: "//*[@data-test='save']",

},
fields: {
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    notice: "//*[@id='notice']",
    nameOfOrganization: "//*[@id='organizationName']",
    organizationCategory: "//*[@id='organizationCategory']",
    organizationLocation: "//*[@id='organizationLocation']",
    address: "//*[@id='address']",
    signatoryName: "//*[@id='signatoryName']",
    signatoryTitle: "//*[@id='signatoryTitle']",
}
}