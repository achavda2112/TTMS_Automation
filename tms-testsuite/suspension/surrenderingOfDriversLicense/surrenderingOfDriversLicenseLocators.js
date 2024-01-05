module.exports = {
    button: {
        clear: "//*[@ng-reflect-label='Clear']",
        search: "//*[@ng-reflect-label='Search']",
        save: "//*[@ng-reflect-label='Save']",
        cancel: "//*[@ng-reflect-label='Cancel']",

},
fields: {
    printNotice: "//p-radiobutton[@value='print']",
    rePrintNotice: "//p-radiobutton[@value='reprint']",
    suspensionOrigin: "//*[@id='suspensionOrigin']",
    effectiveStartDate: "//*[@inputid='disqualificationEffectiveDateFrom']//input",
    effectiveEndDate: "//*[@inputid='disqualificationEffectiveDateTo']//input",
    dlNumber: "//*[@id='dlNumber']",
    oK: "//*[@data-test='okDialog']",
    cancelPopup: "//*[@data-test='cancelDialog']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    surrenderedBy: "//*[@id='itaSurrenderedBy']",
    receivedBy: "//*[@id='itaReceivedBy']",
    dateReceived: "//*[@inputid='itaDateReceived']//input",
    comment: "//*[@id='itaComments']",

}
}