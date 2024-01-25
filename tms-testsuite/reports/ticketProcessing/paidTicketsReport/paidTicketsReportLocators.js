module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    ticketIssueDateStart: "//*[@formcontrolname='ticketIssueDateFrom']//input",
    ticketIssueDateEnd: "//*[@formcontrolname='ticketIssueDateTo']//input",
    parish: "//*[@id='parish']",
    paymentLocation: "//*[@id='paymentLocation']",
    area: "//*[@id='firstLevel']",
    policeStation: "//*[@id='policeStation']",
    paymentDateFrom: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateTo: "//*[@formcontrolname='paymentDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}