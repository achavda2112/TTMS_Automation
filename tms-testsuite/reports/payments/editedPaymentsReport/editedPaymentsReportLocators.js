module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    PaymentDateStart: "//*[@formcontrolname='paymentDateFrom']//input",
    PaymentDateEnd: "//*[@formcontrolname='paymentDateTo']//input",
    authorisationDateStart: "//*[@formcontrolname='authorisationDateFrom']//input",
    authorisationDateEnd: "//*[@formcontrolname='authorisationDateTo']//input",
    parish: "//*[@formcontrolname='parish']",
    paymentLocation: "//*[@formcontrolname='paymentLocation']",
    listUnauthorizedChangesOnly: "//*[@formcontrolname='listUnauthorizedOnly']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}