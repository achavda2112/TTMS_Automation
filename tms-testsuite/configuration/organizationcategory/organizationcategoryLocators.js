module.exports = {
    button: {
        addOrganizationcategory: "[data-test='addOrganizationCategory']",
        saveOrganizationcategory: "[data-test='save']",
        editOrganizationcategory: "[data-test='organizationCategoryEdit']"
    },
    fields: {
        organizationcategoryDescription: "[data-test='description']",
        searchOrganizationcategory: "[data-test='organizationCategorySearch']",
        organizationcategoryCode: "[data-test='code']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']",
    }
}