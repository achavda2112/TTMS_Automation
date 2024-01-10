module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    paymentDate: "//*[@formcontrolname='paymentDate']//input",
    cashier: "//*[@formcontrolname='cashier']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}