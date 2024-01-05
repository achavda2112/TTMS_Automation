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
    errorCode: "[data-test='codeErrorRequired']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    informationNumber: "//*[@id='informationNumber']", 
    ticketNumber: "//*[@id='ticketNumber']", 
    hearingType: "//*[@id='hearingType']",
    courtDecision: "//*[@id='courtDecision']",
    newCourtDate: "//*[@id='newCourtDate']//input",
    newSlot: "//*[@id='newSlot']",
    newHearingType: "//*[@id='newHearingType']",
    reason: "//*[@id='reason']",
    comment: "//*[@id='comment']",
    action: "//*[@id='action']",
    actionselect: "//*[@ng-reflect-selected='false']",
    magistrateRoleName: "//*[@id='magistrate']",
    plea: "//*[@id='plea']",
    verdict: "//*[@name='verdict']",
    bailAmt: "//*[@id='bailAmt']",
    courtFine: "//*[@id='courtFine']",
    courtFineDays: "//*[@id='courtFineDays']",
    courtCost: "//*[@id='courtCost']",
    amtPaid: "//*[@id='amtPaid']",
    offenderOptToServeTime: "//*[@inputid='yes']",
    comments: "//*[@id='comments']",
}
}