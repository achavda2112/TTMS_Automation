module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        generateList: "//*[@label='Generate List']",
        cancel: "//*[@label='Cancel']",
        save: "//*[@label='Save and Print']"
},
fields: {
    modeOfEntry: "//*[@id='modeOfEntry']",
    noOfRecords: "//*[@id='noOfRecords']",
    sortBy: "//*[@id='sortBy']",
    courtDate: "//*[@id='courtDate']",
    courtDate1: "//*[@id='courtDate']//input",
    court: "//*[@id='courtList']",
    preFix: "//*[@id='prefix']",
    Sequencenumber: "//*[@id='sequenceNumber']",
    assignMagistrate: "//*[@id='magistrate']",
    assignSlot: "//*[@id='slot']",
    radioButton: "//*[@data-test='autoGenerateFalse']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    informationNumber1: "//*[@ng-reflect-name='0']//input",
    informationNumber2: "//*[@ng-reflect-name='1']//input",
    informationNumber3: "//*[@ng-reflect-name='2']//input"
}
}