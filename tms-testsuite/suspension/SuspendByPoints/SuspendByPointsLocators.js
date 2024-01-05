module.exports = {
    button: {
        print: "//*[@label='Print List']",
        save: "//*[@label='Save']",
        cancel: "//*[@label='Cancel']",
        saveAndPrint: "//*[@label='Save and Print Notice']"

},
fields: {
    demeritPoints: "//*[@id='courtList']",
    suspensionEffectiveDate: "//*[@formcontrolname='suspensionEffDate']//input",
    checkBox: "//*[@inputid='binary']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
}
}