module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    dateWithdrawnStart: "//*[@formcontrolname='withdrawnDateFrom']//input",
    dateWithdrawnEnd: "//*[@formcontrolname='withdrawnDateTo']//input",
    court: "//*[@id='court']",
    parish: "//*[@id='parish']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}