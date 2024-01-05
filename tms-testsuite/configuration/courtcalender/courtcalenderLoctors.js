module.exports = {
    button: {
    	clearAll: "//button[@ng-reflect-label='Clear All']",
        saveConfiguration: "//*[@data-test='save']",
        saveCountry: "[ng-reflect-label='Save Configuration']",
        print: "//button[contains(., 'Print')]"
    },
    fields: {
    	slotConfigure: "//a[contains(@class, 'cursor-pointer')]",
        monday: "[data-test='monday']",
        tuesday: "[data-test='tuesday']",
        wednesday: "[data-test='wednesday']",
        thursday: "[data-test='thursday']",
        friday: "[data-test='friday']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        selectCourt: "[ng-reflect-placeholder='Select Court']",
        selectYear: "//*[@id='year']",
        startTime: "//input[@placeholder='Start Time']",
        endTime: "//input[@placeholder='End Time']"    
    }
}
