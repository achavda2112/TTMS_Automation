module.exports = {
    button: {
        addWarranttype: "[data-test='addWarrantType']",
        saveWarranttype: "[data-test='save']",
        editWarranttype: "[data-test='warrantTypeEdit']"
    },
    fields: {
        warranttypeCode: "[data-test='code']",
        searchWarranttype: "[data-test='warrantTypeSearch']",
        description: "[data-test='description']",
        shortDescription: "[data-test='shortDescription']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}