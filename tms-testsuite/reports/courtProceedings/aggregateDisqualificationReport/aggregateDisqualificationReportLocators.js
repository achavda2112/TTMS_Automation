module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    offence: "//p-dropdown[@id='offence']",
    dateRangeStart: "//*[@formcontrolname='ticketIssueDateFrom']//input",
    dateRangeEnd: "//*[@formcontrolname='ticketIssueDateTo']//input",
    disqualificationDateStart: "//*[@formcontrolname='disqualificationDateFrom']//input",
    disqualificationDateEnd: "//*[@formcontrolname='disqualificationDateTo']//input",
    duration: "//input[@id='duration']",
    court: "//p-dropdown[@id='courtLocation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}