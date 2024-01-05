module.exports = 
{
button: {
applyFilter: "//button[@label='Apply Filter']", 
clear: "//button[@label='Clear']",
view: "//*[@title='View']"
        },
fields: {
    ticketType: "//p-dropdown[@id='ticketTypeId']",
    modeOfEntry: "//p-dropdown[@id='modeOfEntry']",
    ticketNumber: "//input[@placeholder='Press enter after typing to search single or multiple ticket number']",
    dlNumber: "//*[@id='dlNumber']",
    inputfield: "//*[@class='ng-tns-c25-6 p-inputtext p-component ng-star-inserted']",
    issueDateStart: "//p-calendar[@formcontrolname='issueStartDate']//input[@id='icon']",
    issueDateEnd: "//p-calendar[@ng-reflect-name='issueEndDate']//input[@id='icon']",
    offence: "//p-dropdown[@placeholder='Select Offence']",
    offenceParish: "//p-dropdown[@placeholder='Select Offence Parish']",
    offenceLocation: "//p-dropdown[@placeholder='Offence Location']",
    policeStation: "//p-dropdown[@placeholder='Select Police Station']",
    court: "//p-dropdown[@placeholder='Select Court']",
    policeOfficer: "//p-dropdown[@placeholder='Select police officer']",
    courtDateStart: "//p-calendar[@ng-reflect-name='courtStartDate']//input[@id='icon']",
    courtDateEnd : "//p-calendar[@ng-reflect-name='courtEndDate']//input[@id='icon']",
    createdBy: "//p-dropdown[@placeholder='Select Created By']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
}
}