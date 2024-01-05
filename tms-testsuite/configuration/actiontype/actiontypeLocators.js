module.exports = {
    button: {
        addActiontype: "[data-test='addActionType']",
        saveActiontype: "[data-test='save']",
        editActiontype: "[data-test='actionTypeEdit']"
    },
    fields: {
        searchActiontype: "[data-test='actionTypeSearch']",
        actiontypecode: "[data-test='code']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@data-test='okDialog']"
    }
}