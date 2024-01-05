module.exports = {
    button: {
        addVerdict: "[data-test='addVerdict']",
        saveVerdict: "[data-test='save']",
        editVerdict: "[data-test='verdictEdit']"
    },
    fields: {
        verdictCode: "[data-test='code']",
        searchVerdict: "[data-test='verdictSearch']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}