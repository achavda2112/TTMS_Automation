module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
},
fields: {
    ticketIssueDateFrom: "//*[@formcontrolname='ticketIssueDateFrom']//input",
    ticketIssueDateTo: "//*[@formcontrolname='ticketIssueDateTo']//input",
    area: "//*[@ng-reflect-placeholder='AREA']",
    division: "//*[@ng-reflect-placeholder='DIVISION']",
    StationOffice: "//*[@ng-reflect-placeholder='STATION/OFFICE']",
    policeStation: "//*[@id='policeStation']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}