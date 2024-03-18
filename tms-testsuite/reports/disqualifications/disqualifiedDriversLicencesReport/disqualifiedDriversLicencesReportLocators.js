module.exports = {
    button: {
        generateReport: "//*[@id='report-default-download-button']",
        dropdownbuttonreprot: "//*[@id='report-dropdown-button']",
        generatepdf: "//*[@id='report-pdf-download-button']",
        generateCSV: "//*[@id='report-csv-download-button']"
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