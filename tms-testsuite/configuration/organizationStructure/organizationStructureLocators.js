module.exports = {
    button: {
        addorganizationStructure: "[data-test='addOrg']",
        saveorganizationStructure: "[data-test='save']",
        editorganizationStructure: "[data-test='editOrg']",
        applyFilter: "[data-test='applyFilter']",
    },
    fields: {
        searchorganizationStructurecode: "[data-test='searchBy']",
        organization: "//p-dropdown[@id='org']",
        selectOrganization: "//ul[contains(@class, 'p-dropdown-items')]",
        level: "//p-dropdown[@id='level']",
        selectLevel: "//ul[contains(@class, 'p-dropdown-item')]",
        organizationStructurecode: "[data-test='code']",
        name: "[id='name']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}