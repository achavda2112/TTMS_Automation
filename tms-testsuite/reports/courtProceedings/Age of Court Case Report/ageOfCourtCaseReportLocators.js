module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    dateRangeStart: "//*[@formcontrolname='informationNumberGenerationDateFrom']//input",
    dateRangeEnd: "//*[@formcontrolname='informationNumberGenerationDateTo']//input",
    offence: "//*[@id='offenseId']",
    ageOfCaseInDays: "//*[@id='noOfDaysOfCase']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}