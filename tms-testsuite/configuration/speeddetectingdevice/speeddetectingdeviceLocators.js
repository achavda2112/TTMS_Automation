module.exports = {
    button: {
        addDevice: "[data-test='addSpeedDetectingDevice']",
        saveDevice: "[data-test='save']",
        editDevice: "[data-test='speedDetectingDeviceEdit']"
    },
    fields: {
        searchDevice: "[data-test='speedDetectingDeviceSearch']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}