module.exports = {
    button: {
        addEventreftype: "[data-test='addEventRefType']",
        saveEventreftype: "[data-test='save']",
        editEventreftype: "[data-test='eventRefTypeEdit']"
    },
    fields: {
        searchEventreftype: "[data-test='eventRefTypeSearch']",
        eventreftypeCode: "[data-test='code']",
        eventreftypeLabel: "[data-test='label']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']"
    }
}