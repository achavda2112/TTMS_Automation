module.exports = {
    button: {
        addVehicleType: "[data-test='addVehicleType']",
        saveVehicleType: "[data-test='save']",
        editVehicleType: "[data-test='vehicleTypeEdit']"
    },
    fields: {
        vehicleTypeDescription: "[data-test='description']",
        searchVehicleType: "[data-test='vehicleTypeSearch']",
        vehicleTypeCode: "[data-test='code']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }	
}