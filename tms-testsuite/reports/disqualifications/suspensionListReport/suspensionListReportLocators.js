module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    suspensionEffectiveDateRangeStart: "//*[@formcontrolname='suspensionEffectiveDateFrom']//input",
    suspensionEffectiveDateRangeEnd: "//*[@formcontrolname='suspensionEffectiveDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}