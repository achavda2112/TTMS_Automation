module.exports = {
    button: {
        addticketType: "[data-test='addTicketType']",
        saveticketType: "[data-test='save']",
        editticketType: "[title='Edit']"
    },
    fields: {
        searchtickettypecode: "[data-test='eventSearch']",
        tickettypecode: "[id='code']",
        tickettypename: "[id='name']",
        description: "[id='description']",
        ticketnoprefix: "[id='eTicketNumPrefix']",
        ticketnolength: "[id='eTicketNumLength']",
        manualticketnoprefix: "[id='manualTicketNumPrefix']",
        manualticketnolength: "[id='manualTicketNumLength']",
        paymentDeadline: "[id='noOfDaysForPaymentDeadline']",
        noofdaysforcourtdate: "[id='noOfDaysForCourtDate']",
        mvInfo: "[ng-reflect-name='isMVInfoRequired']",
        licencenoRequired: "[ng-reflect-name='isLicenceNumberRequired']",
        idType: "[id='idType']",
        idtypeSelect1: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
        idtypeSelect2: "//p-multiselectitem[2]//div[@class='p-checkbox-box']",
        tddescription: 'td#description',
        editidtypeSelect3: "//p-multiselectitem[1]//div[@class='p-checkbox-box']",
        errorCode: "[data-test='codeErrorRequired']"
    }
}