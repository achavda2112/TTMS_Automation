module.exports = {
    button: {
        generateReport: "//*[@data-test='generate']"

},
fields: {
    dateWithdrawnStart: "//*[@formcontrolname='withdrawnDateFrom']//input",
    dateWithdrawnEnd: "//*[@formcontrolname='withdrawnDateTo']//input",
    court: "//*[@id='court']",
    parish: "//*[@id='parish']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}