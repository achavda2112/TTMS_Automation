module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    PaymentDateStart: "//*[@formcontrolname='paymentDateFrom']//input",
    PaymentDateEnd: "//*[@formcontrolname='paymentDateTo']//input",
    parish: "//*[@formcontrolname='parish']",
    paymentLocation: "//*[@formcontrolname='paymentLocation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}