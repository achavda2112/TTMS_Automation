module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    paymentDateFrom: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateTo: "//*[@formcontrolname='paymentDateTo']//input",
    parish: "//*[@id='parish']",
    paymentLocation: "//*[@id='paymentLocation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}