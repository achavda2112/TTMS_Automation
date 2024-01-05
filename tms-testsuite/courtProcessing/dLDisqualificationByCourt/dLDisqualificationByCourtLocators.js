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
    reason: "//*[@id='reason']",
    disqualificationDuration: "//*[@id='disqualificationDuration']",
    comments: "//*[@id='description']",
    dLSurrendered: "//*[@data-test='yes']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    dLDisqualification: "//*[@data-test='suspend']",
    dlSurrenderedDate: "//*[@id='dlSurrenderedDate']//input",
    receivedBy: "//*[@id='receivedBy']",
}
}