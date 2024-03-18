module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    authorisationDateFrom: "//*[@formcontrolname='ticketAuthorisationDateFrom']//input",
    authorisationDateTo: "//*[@formcontrolname='ticketAuthorisationDateTo']//input",
    area: "//*[@ng-reflect-placeholder='AREA']",
    division: "//*[@ng-reflect-placeholder='DIVISION']",
    StationOffice: "//*[@ng-reflect-placeholder='STATION/OFFICE']",
    policeStation: "//*[@id='policeStation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}