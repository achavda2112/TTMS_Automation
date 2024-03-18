module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    feature: "//*[@id='feature']",
    dateRangeStart: "//*[@formcontrolname='dateRangeFrom']//input",
    dateRangeEnd: "//*[@formcontrolname='dateRangeTo']//input",
    user: "//*[@id='selectedUsers']",
    checkBox: "//div[@role='checkbox']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}