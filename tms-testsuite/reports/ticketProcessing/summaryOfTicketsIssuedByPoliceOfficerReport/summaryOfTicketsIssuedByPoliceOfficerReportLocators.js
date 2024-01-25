module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    paymentDateFrom: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateTo: "//*[@formcontrolname='paymentDateTo']//input",
    area: "//*[@id='firstLevel']",
    policeStation: "//*[@id='policeStation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}