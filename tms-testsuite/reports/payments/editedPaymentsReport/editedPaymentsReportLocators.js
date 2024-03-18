module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
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