module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    paymentDateFrom: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateTo: "//*[@formcontrolname='paymentDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}