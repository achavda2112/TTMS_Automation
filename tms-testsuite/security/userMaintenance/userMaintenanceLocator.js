module.exports = {
    button: {
        adduserMaintenance: "[ng-reflect-icon='pi pi-plus']",
        saveuserMaintenance: "[ng-reflect-label='Save']",
        edituserMaintenance: "[ng-reflect-icon='pi pi-pencil']",
    },
    fields: {
        searchuserMaintenance: "//span//input[@type='text']",
        userName: "[id='username']",
        email: "[id='email']",
        firstName: "[id='firstName']",
        lastName: "[id='lastName']",
        middleName: "[id='middleName']",
        password: "//p-password//div//input[@placeholder='Password']",
        confirmPassword: "//p-password//div//input[@placeholder='Confirm Password']",
        organization: "//p-dropdown[@id='organization']",
        selectOrganization: "//ul[contains(@class, 'p-dropdown-item')]",
        location: "//p-multiselect[@id='organizationLocation']",
        selectLocation: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
        userGroup: "//p-multiselect[@id='userGroup']",
        userGroup1: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
        userGroup2: "//p-multiselectitem[2]//div[@class='p-checkbox-box']",
        userGroup3: "//p-multiselectitem[3]//div[@class='p-checkbox-box']",
        collapseBasicinfo: "//span[text()='Basic Info']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}