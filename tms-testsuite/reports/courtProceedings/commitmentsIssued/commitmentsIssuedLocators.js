module.exports = {
    button: {
        generateReport: "//*[@data-test='generate']"

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