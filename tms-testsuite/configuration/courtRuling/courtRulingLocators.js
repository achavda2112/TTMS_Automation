module.exports = {
    button: {
        addcourtRuling: "[data-test='addCourtRuling']",
        savecourtRuling: "[data-test='save']",
        editcourtRuling: "[data-test='editCourtRuling']"
    },
    fields: {
        searchcourtRuling: "[data-test='searchCourtRuling']",
        
        reason1: "//p-dropdown[@data-test='courtTypeDropdown']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        courtRulingcode: "[data-test='courtRulingCode']",
        description: "[data-test='description']",
        applicableProperties: "//p-checkbox[@id='fineApplyFlag']",
        disqualificationAllowed: "//p-checkbox[@id='disqualificationDlFlag']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}