module.exports = {
    button: {
        addoffencetype: "[ng-reflect-label='Add']",
        saveoffencetype: "[data-test='save']",
        editoffencetype: "[ng-reflect-icon='pi pi-pencil']"
    },
    fields: {
        searchoffencetype: "//span//input[@type='text']",
        offencetypecode: "[data-test='code']",
        description: "[data-test='description']",
        offenceshortDescription: "[data-test='shortDescription']",
        sectionofAct: "[data-test='sectionOfAct']",
        mandatoryCourtAppearance: "[data-test='mandatoryCourtAppearanceTrue']",
        zoneRequired: "[data-test='zoneRequired']",
        ticketType: "[ng-reflect-name='ticketTypes']",
        selectTickettype : "//p-multiselectitem//li//div[@class='p-checkbox-box']",
        startDate: "//p-calendar[@ng-reflect-name='startDate']",
        endDate: "//p-calendar[@ng-reflect-name='endDate']",
        tddescription: 'td#description',
        fineAmounts: "//input[@formcontrolname='fineAmount']",
        demeritPoints: "//input[@formcontrolname='demeritPoints']",
        errorCode: "[data-test='codeErrorRequired']"
    }
}