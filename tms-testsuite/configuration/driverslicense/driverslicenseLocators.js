module.exports = {
    button: {
        addDriverslicense: "[data-test='addDriverLicence']",
        saveDriverslicense: "[data-test='save']",
        editDriverslicense: "[data-test='driverLicenceEdit']"
    },
    fields: {
        searchDriverslicense: "[data-test='driverLicenceSearch']",
        driverslicenseCode: "[data-test='code']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@data-test='okDialog']"
    }
}