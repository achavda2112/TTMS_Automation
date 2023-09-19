module.exports = {
    button: {
        addorganizationtype: "[data-test='addOrganization']",
        saveorganizationtype: "[data-test='save']",
        editorganizationtype: "[ng-reflect-icon='pi pi-pencil']"
    },
    fields: {
        searchorganizationtype: "//span//input[@type='text']",
        organizationName: "[data-test='name']",
        organizationCode: "[data-test='code']",
        nameofMinistry: "[data-test='nameOfMinistry']",
        ticketType: "[ng-reflect-name='ticketTypes']",
        selectTickettype : "//p-multiselectitem//li//div[@class='p-checkbox-box']",
        addnewRow: "[title='Add New Row']",
        levelone: "//div[@ng-reflect-name='0']//input[@data-test='levelName']",
        leveltwo: "//div[@ng-reflect-name='1']//input[@data-test='levelName']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']"
    }
}