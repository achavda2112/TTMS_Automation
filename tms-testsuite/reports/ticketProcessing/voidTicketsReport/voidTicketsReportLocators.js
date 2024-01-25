module.exports = {
    button: {
        generateReport: "[data-test='generate']"

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