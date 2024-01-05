module.exports = {
    button: {
        addlocationtype: "button[data-test='addLocation']",
        savelocationtype: "[data-test='save']",
        editlocationtype: "button[data-test='locationEdit']"
    },
    fields: {
        searchlocationtype: "input[data-test='addLocation']",
        locationParish: "//p-dropdown[@id='parish']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']",
        errorCode: "[data-test='codeErrorRequired']",
    }
}