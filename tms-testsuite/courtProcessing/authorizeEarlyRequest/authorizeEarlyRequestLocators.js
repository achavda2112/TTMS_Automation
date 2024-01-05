module.exports = {
    button: {
        clear: "//*[@ng-reflect-label='Clear']",
        search: "//*[@ng-reflect-label='Search']",
        save: "//*[@label='Save']",
},
fields: {
    dlNumber: "//*[@id='dlNumber']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    release: "//a[@class='underline-link']",
    releaseDate: "//*[@formcontrolname='releaseDate']//input",
    releaseByCourt: "//*[@id='releaseByCourt']",
    releaseByMagistrate: "//*[@id='releaseByMagistrate']",
    reason: "//*[@id='reason']",
    comments: "//*[@id='comments']"
}
}