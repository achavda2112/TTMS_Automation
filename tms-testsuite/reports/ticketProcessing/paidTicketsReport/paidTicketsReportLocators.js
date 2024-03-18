module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
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