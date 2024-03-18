module.exports = {
    button: {
        add: "[data-test='addCaseStatus']",
        saveCaseStatus: "[data-test='save']",
        editCaseStatus: "[data-test='caseStatusEdit']"
    },
    fields: {
        searchCaseStatus: "[data-test='caseStatusSearch']",
        name: "//*[@data-test='name']",
        description: "//*[@data-test='description']",
        statusType: "//*[@data-test='status']", 
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        code: "[data-test='code']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@data-test='okDialog']",
        
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}