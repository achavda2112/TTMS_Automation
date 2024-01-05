module.exports = {
    button: {
        applyFilter: "//button[@label='Apply Filter']",
        personalcollaps: "//p-fieldset[@ng-reflect-legend='Personal']//a ",
        dlCollaps: `//p-fieldset[@ng-reflect-legend="Driver's Licence"]//a`,
        ticket: "//p-fieldset[@ng-reflect-legend='Tickets [18]']//legend//a",
        demeritPoint: "//p-fieldset[@ng-reflect-legend='Demerit Points']//legend//a",
        disqualification: "//p-fieldset[@ng-reflect-legend='Disqualifications [1]']//legend//a",
        warrant: "//p-fieldset[@ng-reflect-legend='Warrants [2]']//legend//a",

    },
    fields: {
        idNumber: "//input[@id='idNumber']",
        ticketNumber: "//input[@id='ticketNumber']",
        ticketNUmber1: "//td[@id='ticketNumber']/span/a[@class='underline-link']",
        directTicketMatchSearch: "//*[@id='matchExactTicketNumber']",
        directPlateMatchSearch: "//*[@id='matchExactPlateNumber']",
        plateNumber: "//*[@id='plateRegNo']",
        firstName: "//input[@id='firstName']",
        middleName: "//input[@id='middleName']",
        lastName: "//input[@id='lastName']",
        action: "//*[@data-test='actionEdit']"  
    }
}