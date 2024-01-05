module.exports = {
    button: {
        addParish: "[data-test='addParish']",
        saveParish: "[data-test='save']",
        editParish: "[data-test='parishEdit']"
    },
    fields: {
        parishname: "[data-test='parishName']",
        searchParish: "[data-test='parishSearch']",
        parishCode: "[data-test='code']",
        tdname: 'td#parishName',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}