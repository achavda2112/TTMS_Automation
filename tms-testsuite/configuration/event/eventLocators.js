module.exports = {
    button: {
        addEvent: "[data-test='addEvent']",
        saveEvent: "[data-test='save']",
        editEvent: "[data-test='eventEdit']"
    },
    fields: {
        searchEvent: "[data-test='eventSearch']",
        eventcode: "[data-test='code']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']"
    }
}