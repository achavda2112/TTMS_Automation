module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    issueDateStart: "//*[@formcontrolname='warrantIssueDateFrom']//input",
    issueDateEnd: "//*[@formcontrolname='warrantIssueDateTo']//input",
    parish: "//*[@id='offenceParish']",
    issuingCourt: "//*[@id='court']",
    policeStation: "//*[@id='policeStation']",
    sortBy: "//*[@formcontrolname='sortBy']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}