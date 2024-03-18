module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    issueDateStart: "//*[@formcontrolname='warrantIssueDateFrom']//input",
    issueDateEnd: "//*[@formcontrolname='warrantIssueDateTo']//input",
    parish: "//*[@id='offenceParish']",
    issuingCourt: "//*[@id='court']",
    policeStation: "//*[@id='policeStation']",
    sortBy: "//*[@id='sortBy']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}