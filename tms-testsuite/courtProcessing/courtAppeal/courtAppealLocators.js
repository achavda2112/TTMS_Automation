module.exports = {
    button: {
        clear: "//*[@ng-reflect-label='Clear']",
        search: "//*[@ng-reflect-label='Search']",
        back: "//*[@ng-reflect-label='Back']",
        next: "//*[@label='Next']",
        cancel: "//*[@label='Cancel']",
        save: "//*[@ng-reflect-label='Save']"
},
fields: {
    informationNumber: "//*[@id='informationNumber']",
    dateOfAppeal: "//*[@id='dateOfAppeal']//input",
    ResultOfAppeal: "//*[@id='resultOfAppeal']",
    comments: "//*[@id='description']",
    errorCode: "[data-test='codeErrorRequired']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
}
}