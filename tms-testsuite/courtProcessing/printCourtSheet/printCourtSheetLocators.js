module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        generateReport: "//*[@label='Generate Report']",
        printeTickets: "//*[@label='Print e-Tickets']",
},
fields: {
    modeOfEntry: "//*[@id='modeOfEntry']",
    sortBy: "//*[@id='sortBy']",
    courtDateStart: "//*[@inputid='courtDateFrom']",
    courtDateStartInput: "//*[@inputid='courtDateFrom']//input",
    courtDateEnd: "//*[@inputid='courtDateEnd']",
    courtDateEndInput: "//*[@inputid='courtDateEnd']//input",
    court: "//*[@id='courtId']",
    selectSlot: "//*[@id='slot']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
}
}