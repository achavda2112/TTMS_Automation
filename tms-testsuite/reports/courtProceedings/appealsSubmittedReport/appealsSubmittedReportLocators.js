module.exports = {
    button: {
        generateReport: "//*[@data-test='generate']"

},
fields: {
    appealDateFrom: "//*[@formcontrolname='appealDateFrom']//input",
    appealDateTo: "//*[@formcontrolname='appealDateTo']//input",
    court: "//*[@id='court']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}