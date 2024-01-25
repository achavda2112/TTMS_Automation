module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    ticketNumberStart: "//*[@id='ticketNumberFrom']",
    ticketNumberEnd: "//*[@id='ticketNumberTo']",
    ticketIssueDateStart: "//*[@formcontrolname='ticketIssueDateFrom']//input",
    ticketIssueDateEnd: "//*[@formcontrolname='ticketIssueDateTo']//input",
    idNumber: "//*[@id='idNumber']",
    parish: "//*[@id='parish']",
    offenceLocation: "//*[@id='location']",
    offence: "//*[@id='offence']",
    area: "//*[@ng-reflect-placeholder='AREA']",
    division: "//*[@ng-reflect-placeholder='DIVISION']",
    stationOffice: "//*[@ng-reflect-placeholder='STATION/OFFICE']",
    policeOfficer: "//*[@id='policeOfficer']",
    policeStation: "//*[@id='policeStation']",
    court: "//*[@id='court']",
    vehicleType: "//*[@id='vehicleType']",
    ticketStatus: "//*[@id='ticketStatus']",
    sortBy: "//*[@id='sortBy']",
    originalCourtDateStart: "//*[@formcontrolname='originalCourtDateFrom']//input",
    originalCourtDateEnd: "//*[@formcontrolname='originalCourtDateTo']//input",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}