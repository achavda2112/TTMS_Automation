module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    paymentDateStart: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateEnd: "//*[@formcontrolname='paymentDateTo']//input",
    receiptNumbersFrom: "//*[@id='receiptNumberFrom']",
    receiptNumbersTo: "//*[@id='receiptNumberTo']",
    parish: "//*[@id='parish']",
    court: "//*[@id='court']",
    paymentState: "//*[@id='paymentState']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}