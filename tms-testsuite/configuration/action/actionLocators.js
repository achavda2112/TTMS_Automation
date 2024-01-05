module.exports = {
    button: {
        addAction1: "[data-test='addAction']",
        saveAction: "[data-test='save']",
        editAction: "[data-test='actionEdit']"
    },
    fields: {
        searchAction: "[data-test='actionSearch']",
        actionType: "//p-dropdown[@data-test='selectActionType']",
        statusType: "//*[@data-test='status']", 
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        actioncode: "[data-test='code']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@data-test='okDialog']",
        
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}