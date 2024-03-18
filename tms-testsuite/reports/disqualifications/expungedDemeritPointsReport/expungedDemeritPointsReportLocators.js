module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    expungementDateFrom: "//*[@formcontrolname='expungementDateFrom']//input",
    expungementDateEnd: "//*[@formcontrolname='expungementDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}