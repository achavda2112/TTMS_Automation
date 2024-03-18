module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    courtDateStart: "//*[@formcontrolname='originalCourtStartDate']//input",
    courtDateEnd: "//*[@formcontrolname='originalCourtEndDate']//input",
    court: "//*[@id='court']",
    parish: "//*[@id='offenceParish']",
    policeStation: "//*[@id='policeStation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}