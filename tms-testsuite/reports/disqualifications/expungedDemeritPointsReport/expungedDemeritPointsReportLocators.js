module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    expungementDateFrom: "//*[@formcontrolname='expungementDateFrom']//input",
    expungementDateEnd: "//*[@formcontrolname='expungementDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}