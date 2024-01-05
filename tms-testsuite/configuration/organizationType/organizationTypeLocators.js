module.exports = {
    button: {
        addorganizationType: "[data-test='addOrganizationType']",
        saveorganizationType: "[data-test='save']",
        editorganizationType: "[data-test='organizationTypeEdit']"
    },
    fields: {
        searchorganizationType: "[data-test='organizationTypeSearch']",
        organization: "//p-dropdown[@data-test='org']",
        selectOrganization: "//ul[contains(@class, 'p-dropdown-items')]",
        organizationCategory: "//p-dropdown[@data-test='orgCategory']",
        selectOrganizationcategory: "//ul[contains(@class, 'p-dropdown-items')]",
        organizationTypecode: "[data-test='code']",
        organizationTypelabeltext: "[data-test='organizationTypeLabelText']",
        name: "[data-test='name']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}