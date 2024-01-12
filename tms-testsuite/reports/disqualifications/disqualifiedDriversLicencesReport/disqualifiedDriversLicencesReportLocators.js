module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    periodOfDisqualificationStart: "//*[@formcontrolname='disqDateFrom']//input",
    periodOfDisqualificationEnd: "//*[@formcontrolname='disqDateTo']//input",
    periodOfExpirationStart: "//*[@formcontrolname='expirationDateFrom']//input",
    periodOfExpirationEnd: "//*[@formcontrolname='expirationDateTo']//input",
    licenceSurrenderedYES: "//*[@//*[@inputid='yes']",
    licenceSurrenderedNO: "//*[@//*[@inputid='no']",
    licenceSurrenderedALL   : "//*[@//*[@inputid='all']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
}
}