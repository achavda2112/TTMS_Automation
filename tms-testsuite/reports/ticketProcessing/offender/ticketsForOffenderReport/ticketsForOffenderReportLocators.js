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
    idNumber: "//*[@id='idNumber']",
    ticketStatus: "//*[@id='ticketStatus']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}