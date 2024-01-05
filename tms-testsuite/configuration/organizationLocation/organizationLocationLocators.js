module.exports = {
    button: {
        addorganizationLocation: "[data-test='addOrg']",
        saveorganizationLocation: "[data-test='save']",
        editorganizationLocation: "[data-test='editOrg']"
    },
    fields: {
        searchorganizationLocationcode: "[data-test='searchOrg']",
        category1: "//p-dropdown[@data-test='category']",
        selectCategory1: "//ul[contains(@class, 'p-dropdown-items')]",
        organizationType: "//p-dropdown[@data-test='type']",
        selectOrganizationType: "//ul[contains(@class, 'p-dropdown-items')]",
        organization: "[id='organization']",
        parent: "//ul[contains(@class, 'p-tree')]",
        Childbutton: "//button[@class='p-ripple p-element p-tree-toggler p-link' and @type='button']",
        Child: "//ul[contains(@class, 'p-tree')]",
        organizationTypecode: "[data-test='code']",
        shortDescription: "[data-test='shortDesc']",
        organizationLocationcode: "[id='code']",
        mark: "[id='mark']",
        description: "[id='description']",
        streetNumber: "[id='streetNumber']",
        streetName: "[id='streetName']",
        postalLocation: "[id='postalLocation']",
        poBox: "[id='poBox']",
        city: "[id='city']",
        phone1: "[id='phone1']",
        phone2: "[id='phone2']",
        fax: "[id='fax']",
        emailAddress: "[id='emailAddress']",
        contactPerson : "[id='contactPerson']",
        parish: "//p-dropdown[@data-test='parish']",
        selectParish: "//ul[contains(@class, 'p-dropdown-items')]",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']",
    }
}