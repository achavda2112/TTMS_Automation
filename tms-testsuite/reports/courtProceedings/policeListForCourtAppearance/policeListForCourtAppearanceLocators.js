module.exports = {
    button: {
        generateReport: "//*[@data-test='generate']"

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