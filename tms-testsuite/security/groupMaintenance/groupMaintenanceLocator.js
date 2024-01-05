module.exports = {
    button: {
        addgroupMaintenance: "[ng-reflect-label='Add']",
        savegroupMaintenance: "[ng-reflect-label='Save']",
        editgroupMaintenance: "[title='Edit Permission']",
    },
    fields: {
        searchgroupMaintenance: "[placeholder='Search by Name']",
        groupName: "[id='inputGroupName']",
        description: "[id='description']",
        featureAll: "//div[contains(@class,'p-datatable-header')]//p-checkbox[contains(@class,'p-element')]",
        tddescription: '//*[@formcontrolname="description"]',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "//*[@id='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}