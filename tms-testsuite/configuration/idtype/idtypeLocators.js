module.exports = {
    button: {
        addidtype: "[ng-reflect-label='Add']",
        saveidtype: "[data-test='save']",
        editidtype: "[ng-reflect-icon='pi pi-pencil']"
    },
    fields: {
        searchidtype: "//span//input[@type='text']",
        idtypecode: "[data-test='code']",
        idtypename: "[data-test='name']",
        description: "[data-test='description']",
        numberlength: "[data-test='idTypeNumberLength']",
        validationrequired: "[data-test='isValidationRequiredTrue']",
        validationrequired1: "[data-test='isValidationRequiredFalse']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}