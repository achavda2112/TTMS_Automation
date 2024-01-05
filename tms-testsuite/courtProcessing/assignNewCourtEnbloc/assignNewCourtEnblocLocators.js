module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        submit: "//*[@label='Submit']",
        fetchData: "//*[@label='Fetch Data']"
},
fields: {
    court: "//*[@id='courtList']",
    oldCourtDate: "//*[@formcontrolname='courtDate']",
    oldcourtDate1: "//*[@formcontrolname='courtDate']//input",
    oldCourtSlot: "//*[@formcontrolname='oldSlot']",
    newCourtDate: "//*[@formcontrolname='newCourtDate']",
    newCourtDate1: "//*[@formcontrolname='newCourtDate']//input",
    newCourtSlot: "//*[@formcontrolname='slot']",
    courtDecision: "//*[@id='courtDecisionList']",
    reason: "//*[@id='reasonList']",
    comments: "//*[@id='description']",
    informationNumber: "//*[@id='informationNumber']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    courtCases: "//*[@aria-expanded='true']",
    ticketNumber: "//*[@id='ticketNumber']",
}
}