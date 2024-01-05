module.exports = {
    button: {
        addZone: "[data-test='addZone']",
        saveZone: "[data-test='save']",
        editZone: "[data-test='zoneEdit']"
    },
    fields: {
        searchZone: "[data-test='zoneSearch']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"  
    }
}