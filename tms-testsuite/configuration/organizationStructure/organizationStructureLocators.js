module.exports = {
    button: {
        addorganizationStructure: "[data-test='addOrg']",
        saveorganizationStructure: "//button[@data-test='save']",
        editorganizationStructure: "[data-test='editOrg']",
        applyFilter: "[data-test='applyFilter']",
    },
    fields: {
        searchorganizationStructurecode: "[data-test='searchBy']",
        organization: "//p-dropdown[@id='org']",
        selectOrganization: "//ul[contains(@class, 'p-dropdown-items')]",
        LevelDropdown: "//p-dropdown[@id='level']",
        level: "//*[@data-test='searchLevel']",
        parentMasterValue: "//*[@data-test='formLevel']",
        selectLevel: "//ul[contains(@class, 'p-dropdown-item')]",
        selectLevel1: "//ul[contains(@class, 'p-dropdown-items')]",
        organizationStructurecode: "[data-test='code']",
        name: "[id='name']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@label='Ok']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        statusType: "[data-test='status']",
    }
}