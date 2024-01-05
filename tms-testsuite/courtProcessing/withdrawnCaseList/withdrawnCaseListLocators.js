module.exports = {
    button: {
        clear: "//*[@ng-reflect-label='Clear']",
        search: "//*[@ng-reflect-label='Search']",
        cancel: "//*[@label='Cancel']",
        save: "//*[@label='Save']"

},
fields: {
    informationNumber: "//*[@id='informationNumber']",
    reasonForWithdrawal: "//*[@id='reasonForWithdrawal']",
    dateOfWithdrawal: "//*[@formcontrolname='dateOfWithdrawal']//input",
    approvedbyRM: "//*[@formcontrolname='approvedByRM']",
    comments: "//*[@id='description']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
}
}