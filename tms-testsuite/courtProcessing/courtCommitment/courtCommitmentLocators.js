module.exports = {
    button: {
        clear: "//*[@ng-reflect-label='Clear']",
        search: "//*[@ng-reflect-label='Search']",
        back: "//*[@ng-reflect-label='Back']",
        next: "//*[@label='Next']",
        cancel: "//*[@label='Cancel']",
        save: "//*[@label='Save']"
},
fields: {
    commitmentNumber: "//*[@id='commitmentNo']",
    policePoliceStationIssuedToStation : "//*[@id='policeStation']",
    isDocumentReturnedTrue : "//*[@data-test='isDocumentReturnedTrue']",
    timeServed : "//*[@id='timeServed']",
    informationNumber : "//*[@id='informationNumber']",
    errorCode: "[data-test='codeErrorRequired']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    comments: "//*[@id='comments']",
}
}