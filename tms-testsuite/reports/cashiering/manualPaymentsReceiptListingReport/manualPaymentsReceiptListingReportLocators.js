module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    paymentDateStart: "//*[@formcontrolname='paymentDateFrom']//input",
    paymentDateEnd: "//*[@formcontrolname='paymentDateTo']//input",
    receiptNumbersFrom: "//*[@id='receiptNumberFrom']",
    receiptNumbersTo: "//*[@id='receiptNumberTo']",
    parish: "//*[@id='parish']",
    court: "//*[@id='court']",
    paymentState: "//*[@id='paymentState']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}