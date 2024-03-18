module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    commitmentIssueDateStart: "//*[@formcontrolname='commitmentIssuedFrom']//input",
    commitmentIssueDateEnd: "//*[@formcontrolname='commitmentIssuedTo']//input",
    court: "//*[@id='court']",
    policeStation: "//*[@id='policeStation']",
    commitmentNumberStart: "//*[@id='commitmentNumberStart']",
    commitmentNumberEnd: "//*[@id='commitmentNumberEnd']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}