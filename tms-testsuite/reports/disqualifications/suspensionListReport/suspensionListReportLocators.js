module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    suspensionEffectiveDateRangeStart: "//*[@formcontrolname='suspensionEffectiveDateFrom']//input",
    suspensionEffectiveDateRangeEnd: "//*[@formcontrolname='suspensionEffectiveDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}