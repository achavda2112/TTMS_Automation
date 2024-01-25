module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    ticketIssueDateStart: "//*[@formcontrolname='ticketIssueDateFrom']//input",
    ticketIssueDateEnd: "//*[@formcontrolname='ticketIssueDateTo']//input",
    idNumber: "//*[@id='idNumber']",
    ticketStatus: "//*[@id='ticketStatus']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}