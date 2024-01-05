module.exports = {
    button: {
        addOffendertype: "[data-test='addOffenderType']",
        saveOffendertype: "[data-test='save']",
        editOffendertype: "[data-test='offenderTypeEdit']"
    },
    fields: {
        searchOffendertype: "[data-test='offenderTypeSearch']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']",
        errorCode: "[data-test='codeErrorRequired']",
    }
}