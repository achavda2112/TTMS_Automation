module.exports = {
    button: {
        generateNotice: "//*[@label='Generate Notices']",
        clear: "//*[@label='Clear']",

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
}
}